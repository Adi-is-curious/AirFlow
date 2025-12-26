import Link from "next/link";
import { Wind, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Wind className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                AirFlow Station
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Revolutionizing highway air purification with sustainable, self-powered infrastructure.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
                            <li><Link href="/performance" className="hover:text-primary transition-colors">Performance</Link></li>
                            <li><Link href="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>aditya.aloe29@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>9801781159</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Near Viva city mall, Jaipur 303905</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} AirFlow Station. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
