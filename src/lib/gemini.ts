import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini (Safe check for API Key)
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function generateAIInsight(metrics: {
    windSpeed: number;
    pmLevel: number;
    batterySoc: number;
    operatingMode: string;
}): Promise<string> {
    // FALLBACK: If no API key, return simulated "Smart" insight
    if (!genAI) {
        return simulateInsight(metrics);
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt = `
      Act as an AI Control System for a highway wind turbine air purifier.
      Current Telemetry:
      - Wind Speed: ${metrics.windSpeed} m/s
      - PM2.5 Level: ${metrics.pmLevel} μg/m³
      - Battery SOC: ${metrics.batterySoc}%
      - Current Mode: ${metrics.operatingMode}

      Provide a 1-sentence operational decision or insight in a technical but clear tone.
      Example: "Wind speed optimal for charging; maintaining HARVEST mode to build reserves for evening traffic."
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.warn('Gemini API Failed, using simulation', error);
        return simulateInsight(metrics);
    }
}

function simulateInsight(metrics: { windSpeed: number; pmLevel: number; batterySoc: number }) {
    const { windSpeed, pmLevel, batterySoc } = metrics;

    if (windSpeed > 10) return "High wind speeds detected (10+ m/s). Turbine efficiency maxed. Rapid charging in progress.";
    if (pmLevel > 100) return "Critical pollution levels determined. Diverting all excess power to filtration intake blowers.";
    if (batterySoc < 20) return "Energy reserves critical. Reducing telemetry rate and entering deep sleep cycle to preserve system integrity.";
    if (batterySoc > 90) return "Battery near capacity. Opportunist purification cycle engaged to utilize excess generated potential.";

    return `Nominal operation. Wind (${windSpeed}m/s) provides steady base load. AI optimizing MPPT curve for current conditions.`;
}
