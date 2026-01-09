import React from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <FloatingNavbar />
      <main className="flex-1 relative z-10 w-full">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}