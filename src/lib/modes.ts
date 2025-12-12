export type OperationMode = 'HARVEST' | 'PURIFY' | 'SLEEP' | 'STORM';

interface SystemState {
    batterySoc: number;
    windSpeed: number;
    pmLevel: number;
}

export const ModeLogic = {
    /**
     * Determines the next operating mode based on current system state.
     */
    determineMode(state: SystemState): OperationMode {
        const { batterySoc, windSpeed, pmLevel } = state;

        // 1. SAFETY OVERRIDE: Storm Logic
        if (windSpeed > 20) {
            return 'STORM';
        }

        // 2. CRITICAL BATTERY: Sleep Logic
        if (batterySoc < 10) {
            return 'SLEEP';
        }

        // 3. PURIFICATION: High Pollution + Sufficient Energy
        // If pollution is high (> 60 AQI approx) and battery has juice (> 30%)
        if (pmLevel > 60 && batterySoc > 30) {
            return 'PURIFY';
        }

        // Also purify if battery is FULL (dump excess energy into blower instead of braking)
        if (batterySoc > 95) {
            return 'PURIFY';
        }

        // 4. DEFAULT: Harvest Energy
        return 'HARVEST';
    }
};
