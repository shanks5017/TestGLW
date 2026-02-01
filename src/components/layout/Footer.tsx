
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../../assets/logo.png';

const FOOTER_LINKS = {
  product: [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Waitlist', href: '/waitlist' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-20 pb-10 relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="GetLanded Logo" className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">GetLanded</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your AI copilot for the modern job search. Land your dream role faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-50 rounded-lg text-slate-400 hover:text-[#0463c7] hover:bg-[#E8F3FC] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-lg text-slate-400 hover:text-[#0463c7] hover:bg-[#E8F3FC] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-lg text-slate-400 hover:text-[#0463c7] hover:bg-[#E8F3FC] transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-500 hover:text-[#0463c7] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-500 hover:text-[#0463c7] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-500 hover:text-[#0463c7] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="lg:col-span-3">
            <h4 className="font-semibold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for career tips and platform updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
              <button className="w-full px-4 py-2.5 rounded-lg bg-[#0040C1] text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10">
                Subscribe
              </button>
              <p className="text-xs text-slate-400">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} GetLanded. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
