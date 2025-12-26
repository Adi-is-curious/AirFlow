import { XCircle, CheckCircle } from "lucide-react";

export function V1V2Comparison() {
  const comparisonData = [
    { aspect: "Filtration", v1: "HEPA 1,500 m³/h", v2: "ESP 900-1,100 m³/h" },
    { aspect: "Power Budget", v1: "40W (Impossible ✗)", v2: "110W (Realistic ✓)" },
    { aspect: "Thermodynamic Status", v1: "7.6x Violation", v2: "Physics-Compliant" },
    { aspect: "Venturi Boost", v1: "1.5-2.25x (Lab)", v2: "1.3x (Field-Tested)" },
    { aspect: "Soot Cleaning", v1: "Vibration Fails", v2: "Depot Chemical Bath" },
    { aspect: "Ozone Control", v1: "None", v2: "3-Layer Active Defense" },
    { aspect: "Daily Energy", v1: "-4,725 Wh Deficit", v2: "~1,000 Wh Balanced" },
    { aspect: "PM₂.₅ Removal", v1: "N/A", v2: "80-95% Per-Pass" },
    { aspect: "Deployability", v1: "Non-Viable", v2: "Ready for Pilot" },
  ];

  return (
    <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                Reality Check: <span className="text-red-500">V1.0</span> vs <span className="text-primary">V2.0</span>
            </h2>
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-muted border-b border-border">
                            <th className="p-4 font-bold text-heading">Aspect</th>
                            <th className="p-4 font-bold text-red-600/80">V1.0 (Flawed)</th>
                            <th className="p-4 font-bold text-primary">V2.0 (Viable)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {comparisonData.map((row, i) => (
                            <tr key={i} className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-medium text-foreground/80">{row.aspect}</td>
                                <td className="p-4 text-muted-foreground relative">
                                    {row.v1.includes("✗") || row.v1.includes("Deficit") || row.v1.includes("Violation") || row.v1.includes("Fails") || row.v1.includes("Non-Viable") ? (
                                        <span className="flex items-center gap-2 text-red-600/70">
                                            <XCircle size={16} /> {row.v1.replace(" ✗", "")}
                                        </span>
                                    ) : (
                                        row.v1
                                    )}
                                </td>
                                <td className="p-4 font-bold text-heading relative">
                                    {row.v2.includes("✓") ? (
                                        <span className="flex items-center gap-2 text-green-600">
                                            <CheckCircle size={16} /> {row.v2.replace(" ✓", "")}
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-primary" /> {row.v2}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}
