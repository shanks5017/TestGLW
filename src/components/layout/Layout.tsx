import React, { useEffect } from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function Layout({ children, hideFooter = false }: LayoutProps) {
  // Lenis removed for native scroll stability
  useEffect(() => {
    // No smooth scroll to prevent refresh/align issues
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#D6EAFF] selection:text-[#2A74C9]">
      <FloatingNavbar />
      <main className="flex-1 relative z-10 w-full">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
