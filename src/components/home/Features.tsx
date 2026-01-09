import { Chrome, Brain, Globe, FileText, Zap } from 'lucide-react';
import { Section, FadeIn } from '../ui/Section';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';

const features = [
    {
        title: "Global Job Search",
        description: "Access job listings from companies worldwide with our powerful aggregator.",
        icon: <Globe className="w-6 h-6 text-blue-500" />,
        className: "md:col-span-2",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50" />
    },
    {
        title: "Smart Tracking",
        description: "Visualise your job search progress with a Kanban board.",
        icon: <FileText className="w-6 h-6 text-purple-500" />,
        className: "md:col-span-1",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50" />
    },
    {
        title: "AI Resume Writer",
        description: "Generate tailored resumes that pass ATS filters. Our AI ensures you match the job description perfectly.",
        icon: <Brain className="w-6 h-6 text-amber-500" />,
        className: "md:col-span-1",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50" />
    },
    {
        title: "Browser Extension",
        description: "Save jobs from LinkedIn or Indeed with a single click. Keep track of every application without leaving the tab.",
        icon: <Chrome className="w-6 h-6 text-green-500" />,
        className: "md:col-span-2",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-50 to-green-100/50" />
    }
];

export function Features() {
    return (
        <Section id="features" className="py-32 bg-white relative" width="full">
            <div className="mb-20 text-center max-w-3xl mx-auto px-6">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Everything you need to <br /> <span className="text-primary">get hired.</span>
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        Powerful tools designed to streamline your job search and help you land more interviews.
                    </p>
                </FadeIn>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <BentoGrid className="w-full">
                    {features.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </Section>
    );
}
