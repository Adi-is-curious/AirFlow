"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setSuccess(true);
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Header */}
            <section className="py-20 bg-accent/20 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Partner with us to build the future of clean highways.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground">contact@airflowstation.com</p>
                                        <p className="text-muted-foreground">partnerships@airflowstation.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground">+91 98765 43210</p>
                                        <p className="text-muted-foreground">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Headquarters</h3>
                                        <p className="text-muted-foreground">
                                            123 Innovation Drive,<br />
                                            Tech Park, New Delhi,<br />
                                            India - 110001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-accent/5 p-8 rounded-2xl border border-white/10"
                        >
                            {success ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                        <Check className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground">
                                        Thank you for reaching out. We&apos;ll get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="mt-8 text-primary hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Check({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
