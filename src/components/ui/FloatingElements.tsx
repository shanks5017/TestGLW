
import { Code, Database, Globe, Zap, Target, Users } from 'lucide-react';

const floatingElements = [
  { icon: Code, delay: 0, x: '10%', y: '20%' },
  { icon: Database, delay: 1, x: '80%', y: '15%' },
  { icon: Globe, delay: 2, x: '15%', y: '70%' },
  { icon: Zap, delay: 3, x: '85%', y: '75%' },
  { icon: Target, delay: 4, x: '50%', y: '10%' },
  { icon: Users, delay: 5, x: '70%', y: '60%' },
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: element.x,
              top: element.y,
              animationDelay: `${element.delay}s`,
              animationDuration: '6s',
            }}
          >
            <Icon className="w-8 h-8 text-teal-400" />
          </div>
        );
      })}
    </div>
  );
}