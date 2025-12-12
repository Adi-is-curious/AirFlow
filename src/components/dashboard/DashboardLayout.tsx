'use client';

import React from 'react';
import { LayoutDashboard, Activity, Battery, Wind, Settings, FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 flex">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md"
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                        <span className="text-xl font-bold tracking-tight">AirFlow Station</span>
                    </div>

                    <nav className="space-y-2">
                        <NavItem href="/dashboard" icon={<LayoutDashboard size={20} />} active>Overview</NavItem>
                        <NavItem href="/calculator" icon={<Activity size={20} />}>Calculator</NavItem>
                        <NavItem href="#" icon={<Wind size={20} />}>Stations</NavItem>
                        <NavItem href="#" icon={<Battery size={20} />}>Energy</NavItem>
                        <NavItem href="#" icon={<FileText size={20} />}>Reports</NavItem>
                        <NavItem href="#" icon={<Settings size={20} />}>Settings</NavItem>
                    </nav>
                </div>

                <div className="absolute bottom-0 w-full p-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div>
                            <div className="text-sm font-medium">Administrator</div>
                            <div className="text-xs text-slate-500">Municipality ID: NH-48</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-8 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}

function NavItem({ href, icon, children, active }: any) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
        ${active
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
      `}
        >
            {icon}
            {children}
        </Link>
    );
}
