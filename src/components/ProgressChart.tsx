'use client';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

export default function ProgressChart() {
  const [progressData, setProgressData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      tension: number;
      fill: boolean;
    }[];
  }>({
    labels: [],
    datasets: []
  });
  const [totalHours, setTotalHours] = useState(0);
  const [averageDaily, setAverageDaily] = useState(0);
  const [dateRange, setDateRange] = useState('week'); // 'week', 'month', 'all'

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/users/study-time');
        const data = await response.json();

        // Filter data based on selected date range
        const filteredData = filterDataByRange(data.studyTimes, dateRange);

        // Process daily study times
        const dailyStudyTime = filteredData.reduce((acc: Record<string, number>, session: { date: string; duration: number }) => {
          const date = new Date(session.date).toLocaleDateString();
          acc[date] = (acc[date] || 0) + session.duration;
          return acc;
        }, {});

        // Calculate statistics
        const totalMinutes = (Object.values(dailyStudyTime) as number[]).reduce((sum: number, mins: number) => sum + mins, 0);
        const total = Math.round((totalMinutes / 60) * 10) / 10;
        const average = Math.round((totalMinutes / Object.keys(dailyStudyTime).length / 60) * 10) / 10;

        setTotalHours(total);
        setAverageDaily(average);

        setProgressData({
          labels: Object.keys(dailyStudyTime),
          datasets: [
            {
              label: 'Study Hours',
              data: (Object.values(dailyStudyTime) as number[]).map((minutes: number) => +(minutes / 60).toFixed(1)),
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.1,
              fill: true,
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching study time:', error);
      }
    };

    fetchProgress();
  }, [dateRange]);

  const filterDataByRange = (data: { date: string; duration: number }[], range: string) => {
    const now = new Date();
    const cutoffDate = new Date();

    switch (range) {
      case 'week':
        cutoffDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        cutoffDate.setMonth(now.getMonth() - 1);
        break;
      default:
        return data; // 'all' case
    }

    return data.filter(session => new Date(session.date) >= cutoffDate);
  };

  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg sm:text-xl text-gray-500 font-semibold">Study Time Analytics</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start sm:items-center">
          <select 
            className="px-3 py-1 border rounded-lg text-gray-600 w-full sm:w-auto"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="all">All Time</option>
          </select>
          
          <div className="grid grid-cols-2 sm:flex gap-4 w-full sm:w-auto">
            <div className="text-center p-2 bg-blue-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-500">Total Hours</p>
              <p className="text-lg sm:text-xl font-bold text-blue-600">{totalHours}h</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-500">Daily Average</p>
              <p className="text-lg sm:text-xl font-bold text-green-600">{averageDaily}h</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-[200px] sm:h-[300px] md:h-[400px]">
        <Line 
          data={progressData} 
          options={{ 
            responsive: true, 
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Hours',
                  font: {
                    size: 14
                  }
                },
                ticks: {
                  callback: (value) => `${value}h`,
                  font: {
                    size: 12
                  }
                }
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  maxRotation: 45,
                  minRotation: 45,
                  font: {
                    size: 11
                  }
                }
              }
            },
            plugins: {
              legend: {
                position: 'top' as const,
                labels: {
                  boxWidth: 20,
                  padding: 20,
                  font: {
                    size: 12
                  }
                }
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.parsed.y} hours`
                },
                padding: 10,
                titleFont: {
                  size: 13
                },
                bodyFont: {
                  size: 12
                }
              }
            }
          }} 
        />
      </div>
    </div>
  );
}