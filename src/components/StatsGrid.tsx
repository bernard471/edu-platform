export default function StatsGrid() {
    const stats = [
      { title: 'Courses Completed', count: 4, icon: '📚' },
      { title: 'Labs Completed', count: 12, icon: '✅' },
      { title: 'Hours Spent', count: 48, icon: '⏰' },
      { title: 'Certificates', count: 3, icon: '🏆' },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-500">{stat.count}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  