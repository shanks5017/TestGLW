

const companies = [
  { name: 'Google', bgColor: 'bg-white', textColor: 'text-gray-800', icon: '🔍' },
  { name: 'Microsoft', bgColor: 'bg-[#0352a8]', textColor: 'text-white', icon: '⊞' },
  { name: 'Meta', bgColor: 'bg-[#0352a8]', textColor: 'text-white', icon: 'f' },
  { name: 'Apple', bgColor: 'bg-gray-800', textColor: 'text-white', icon: '' },
  { name: 'Netflix', bgColor: 'bg-red-600', textColor: 'text-white', icon: '▶' },
  { name: 'Spotify', bgColor: 'bg-green-500', textColor: 'text-white', icon: '♫' },
  { name: 'Uber', bgColor: 'bg-black', textColor: 'text-white', icon: '🚗' },
  { name: 'Airbnb', bgColor: 'bg-pink-500', textColor: 'text-white', icon: '🏠' },
  { name: 'LinkedIn', bgColor: 'bg-[#2A74C9]', textColor: 'text-white', icon: 'in' },
  { name: 'GitHub', bgColor: 'bg-gray-900', textColor: 'text-white', icon: '⚡' },
  { name: 'Twitter', bgColor: 'bg-[#70ADEF]', textColor: 'text-white', icon: '🐦' },
  { name: 'Stripe', bgColor: 'bg-purple-600', textColor: 'text-white', icon: 'S' }
];

export function CompanyLogosCarousel() {
  // Duplicate the companies array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll-left space-x-6">
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className={`flex items-center space-x-3 px-4 py-2 rounded-full ${company.bgColor} flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span className={`text-lg ${company.textColor}`}>{company.icon}</span>
            </div>
            <span className={`font-medium ${company.textColor} text-sm whitespace-nowrap`}>
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
