
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  Settings,
  Search,
  Bell,
  MoreHorizontal,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from '../components/ui/Button';

// Mock Data
const stats = [
  { label: "Total Applications", value: "45", change: "+12%", trend: "up" },
  { label: "Interviews Scheduled", value: "3", change: "+1", trend: "up" },
  { label: "Profile Views", value: "128", change: "+24%", trend: "up" },
  { label: "Response Rate", value: "18%", change: "+2%", trend: "up" }
];

const applications = [
  { company: "Spotify", role: "Product Designer", status: "Interview", date: "2h ago", logo: "https://logo.clearbit.com/spotify.com" },
  { company: "Airbnb", role: "Frontend Developer", status: "Applied", date: "1d ago", logo: "https://logo.clearbit.com/airbnb.com" },
  { company: "Linear", role: "Software Engineer", status: "Rejected", date: "3d ago", logo: "https://logo.clearbit.com/linear.app" },
  { company: "Notion", role: "Growth Engineer", status: "Offer", date: "5d ago", logo: "https://logo.clearbit.com/notion.so" },
  { company: "Figma", role: "Product Manager", status: "Applied", date: "1w ago", logo: "https://logo.clearbit.com/figma.com" },
];

const statusColors = {
  Interview: "bg-purple-100 text-purple-700",
  Applied: "bg-[#D6EAFF] text-[#2A74C9]",
  Rejected: "bg-red-100 text-red-700",
  Offer: "bg-green-100 text-green-700"
};

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-[#171717]">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 p-6 flex-col hidden md:flex sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-8 h-8 bg-[#0463c7] rounded-lg flex items-center justify-center text-white font-bold">G</div>
          <span className="font-bold text-xl">GetLanded</span>
        </div>

        <nav className="space-y-2 flex-1">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Briefcase, label: "Jobs" },
            { icon: FileText, label: "Resumes" },
            { icon: MessageSquare, label: "Messages" },
            { icon: Settings, label: "Settings" }
          ].map((item, i) => (
            <button
              key={i}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium",
                item.active
                  ? "bg-[#EFF4FF] text-[#0463c7]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#171717]"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 bg-[#E8F3FC] rounded-2xl">
          <h4 className="font-bold text-[#0463c7] mb-2 text-sm">Pro Plan</h4>
          <p className="text-xs text-[#0463c7] mb-3">You have 5 premium scans remaining.</p>
          <button className="text-xs font-bold text-[#0463c7] hover:underline">Upgrade Now</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs, companies..."
              className="bg-transparent border-none outline-none text-sm w-full max-w-md text-[#171717] placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-[#171717]">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="User" />
            </div>
          </div>
        </header>

        <main className="p-8 max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[#171717]">Welcome back, Alex</h1>
              <p className="text-gray-500">Here's what's happening with your job search today.</p>
            </div>
            <Button className="py-3 px-6">Find New Jobs</Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm"
              >
                <div className="text-gray-500 text-sm font-medium mb-2">{stat.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-[#171717]">{stat.value}</div>
                  <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.change}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Recent Applications */}
            <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <h2 className="font-bold text-lg text-[#171717]">Recent Applications</h2>
                <button className="text-sm font-semibold text-[#0463c7] hover:underline">View All</button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 border border-gray-100">
                        <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-[#171717]">{app.role}</div>
                        <div className="text-sm text-gray-500">{app.company}</div>
                      </div>
                      <div className={cn("px-3 py-1 rounded-full text-xs font-bold", statusColors[app.status as keyof typeof statusColors])}>
                        {app.status}
                      </div>
                      <div className="text-sm text-gray-400 font-medium w-16 text-right">{app.date}</div>
                      <button className="text-gray-300 hover:text-[#171717] opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">

              {/* Goal Progress */}
              <div className="bg-[#171717] rounded-[32px] p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold">Weekly Goal</div>
                  </div>
                  <div className="text-3xl font-bold mb-2">12/15</div>
                  <div className="text-sm text-gray-400 mb-6">Applications sent this week. Keep it up!</div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0463c7] w-[80%]" />
                  </div>
                </div>
                {/* Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0463c7] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />
              </div>

              {/* Upcomming Events */}
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-lg text-[#171717] mb-6">Upcoming</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-gray-50">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex flex-col items-center justify-center text-purple-600 shrink-0">
                      <span className="text-xs font-bold uppercase">Oct</span>
                      <span className="text-lg font-bold">24</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#171717] text-sm">Spotify Interview</div>
                      <div className="text-xs text-gray-500 mb-1">Product Design Round</div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" /> 2:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F3FC] flex flex-col items-center justify-center text-[#0463c7] shrink-0">
                      <span className="text-xs font-bold uppercase">Oct</span>
                      <span className="text-lg font-bold">26</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#171717] text-sm">Resume Review</div>
                      <div className="text-xs text-gray-500 mb-1">With Career Coach</div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" /> 10:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
