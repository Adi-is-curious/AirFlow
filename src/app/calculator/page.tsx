import EnergyCalculator from '@/components/calculator/EnergyCalculator';

export default function CalculatorPage() {
    return (
        <div className="min-h-screen pt-24 px-4 bg-slate-50 dark:bg-black">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                        Design Your Network
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Simulate the impact of deploying AirFlow Stations on your local highway corridor.
                        Analyze energy generation, pollution reduction, and financial ROI.
                    </p>
                </div>

                <EnergyCalculator />
            </div>
        </div>
    );
}
