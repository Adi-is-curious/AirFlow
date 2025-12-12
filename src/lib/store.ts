import { create } from 'zustand';

interface SimulationState {
    // Environmental Data
    windSpeed: number;      // m/s
    solarIrradiance: number; // W/m²
    pmLevel: number;        // μg/m³
    temperature: number;    // °C

    // System State
    batterySoc: number;     // % (0-100)
    powerOutput: number;    // Watts
    powerConsumption: number; // Watts
    operatingMode: 'HARVEST' | 'PURIFY' | 'SLEEP' | 'STORM';

    // Impact Metrics
    totalEnergyGenerated: number; // kWh (lifetime/session)
    co2Offset: number;          // kg
    livesProtected: number;     // Estimated count based on PM reduction

    // Actions
    updateMetrics: (data: Partial<SimulationState>) => void;
    setOperatingMode: (mode: 'HARVEST' | 'PURIFY' | 'SLEEP' | 'STORM') => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
    windSpeed: 5,
    solarIrradiance: 800,
    pmLevel: 120,
    temperature: 28,

    batterySoc: 75,
    powerOutput: 0,
    powerConsumption: 0,
    operatingMode: 'HARVEST',

    totalEnergyGenerated: 1250, // Starting baseline for demo
    co2Offset: 850,
    livesProtected: 2340,

    updateMetrics: (data) => set((state) => ({ ...state, ...data })),
    setOperatingMode: (mode) => set({ operatingMode: mode }),
}));
