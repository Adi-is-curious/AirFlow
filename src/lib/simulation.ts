export class AirFlowSimulator {
    private time = 0; // Simulation time pointer
    private season: 'summer' | 'winter' = 'summer';

    constructor() {
        this.time = Math.floor(Math.random() * 1440); // Start at random time of day
    }

    /**
     * Generates realistic wind speed based on diurnal cycles and random variance.
     * Morning/Evening: Lower wind. Afternoon: Peak wind.
     */
    generateWindSpeed(): number {
        const baseWind = 5.5; // Average m/s
        // Diurnal cycle: Peak around 14:00 (minute 840), Low at 02:00
        // Normalized time 0-2PI
        const diurnalCycle = 2.5 * Math.sin((this.time - 480) * (Math.PI / 720));

        // Random turbulence (Perlin-ish noise approximation)
        const turbulence = (Math.random() - 0.5) * 1.5;

        // Gust factor (occasional spikes)
        const gust = Math.random() > 0.95 ? Math.random() * 2 : 0;

        let speed = baseWind + diurnalCycle + turbulence + gust;
        return Math.max(0.5, speed); // Ensure strictly positive
    }

    /**
     * Generates realistic solar irradiance (W/m²)
     */
    generateSolarIrradiance(): number {
        const hour = (this.time % 1440) / 60;

        if (hour < 6 || hour > 18) return 0; // Night

        // Peak at noon (12:00)
        const peakIrradiance = 1000;
        const declination = Math.sin((hour - 6) * (Math.PI / 12));

        // Cloud cover noise
        const cloudCover = Math.random() > 0.8 ? Math.random() * 0.4 : 0;

        return Math.max(0, peakIrradiance * declination * (1 - cloudCover));
    }

    /**
     * Generates PM2.5 levels based on traffic patterns (Morning/Evening rush hours)
     */
    generatePMLevel(isPurifying: boolean): number {
        const hour = (this.time % 1440) / 60;
        let basePM = 80;

        // Rush hour peaks: 8-10 AM and 5-8 PM
        if ((hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 20)) {
            basePM = 150;
        } else if (hour > 1 && hour < 5) {
            basePM = 40; // Late night low
        }

        const variance = (Math.random() - 0.5) * 20;
        let currentPM = basePM + variance;

        // Deep reduction if purifying
        if (isPurifying) {
            currentPM = currentPM * 0.65; // 35% reduction simulation
        }

        return Math.max(10, currentPM);
    }

    /**
     * Calculates Power Output (Watts) = Wind + Solar
     * Wind P = 0.5 * rho * A * v^3 * Cp
     */
    calculatePowerOutput(windSpeed: number, solarIrradiance: number): number {
        // Constants
        const rho = 1.225; // Air density kg/m³
        const A = 1.2;     // Swept area m² (Vertical Axis Wind Turbine + Scoop)
        const Cp = 0.35;   // Power coefficient (Efficiency)
        const cutInSpeed = 2.5; // m/s

        let windPower = 0;
        if (windSpeed > cutInSpeed) {
            windPower = 0.5 * rho * A * Math.pow(windSpeed, 3) * Cp;
        }

        // Solar Panel (approx 160W rated)
        const solarEfficiency = 0.18;
        const panelArea = 1.0; // m²
        const solarPower = solarIrradiance * panelArea * solarEfficiency;

        return Math.floor(windPower + solarPower);
    }

    tick() {
        this.time += 5; // Advance 5 simulated minutes per tick
        if (this.time >= 1440) this.time = 0; // Reset day
        return this.time;
    }
}
