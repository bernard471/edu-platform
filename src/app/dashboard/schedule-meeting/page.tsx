"use client"
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { addDays, isSameDay, startOfWeek, addWeeks } from 'date-fns'
import Link from 'next/link'
import { Shield } from 'lucide-react'

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  })

  // Function to get available dates for next 3 months
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    const numberOfWeeks = 12 // 3 months worth of weeks

    for (let week = 0; week < numberOfWeeks; week++) {
      const weekStart = startOfWeek(addWeeks(today, week))
      dates.push(
        addDays(weekStart, 3), // Wednesday
        addDays(weekStart, 5), // Friday
        addDays(weekStart, 6)  // Saturday
      )
    }
    return dates
  }

  const availableDates = getAvailableDates()

  // Time slots for each day of the week
  const availabilityData = {
    'Wed': ["09:00", "14:00", "15:00"],
    'Fri': ["10:00", "12:00", "14:00"],
    'Sat': ["10:00", "11:00", "13:00"]
  }

  const isDateAvailable = (date: Date) => {
    return availableDates.some(availableDate => 
      isSameDay(availableDate, date)
    )
  }

      const getAvailableTimeSlots = (date: Date | undefined) => {
        if (!date) return []
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
        return availabilityData[dayName as keyof typeof availabilityData] || []
      }
    
      const handleDateSelect = (date: Date | undefined) => {
        setSelectedDate(date)
        setSelectedTime('') // Reset time selection when date changes
      }
    
      const handleTimeSelect = (time: string) => {
        setSelectedTime(time)
      }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const meetingData = {
      ...formData,
      date: selectedDate,
      time: selectedTime
    }
    console.log('Meeting scheduled:', meetingData)
  }

  const availableTimeSlots = selectedDate ? getAvailableTimeSlots(selectedDate) : []

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center justify-center mb-4 space-x-2 cursor-pointer">
            <Shield className="w-8 h-8 text-cyan-500" />
            <span className="text-2xl text-cyan-400 font-bold">DK Cyber</span>
          </Link>
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-xl shadow-sm p-8">
        <div className="lg:flex lg:justify-between lg:items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Schedule a Meeting</h1>
        <Link href="/dashboard/course-study">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700">
            Back to Course Study
        </button>
        </Link>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-blue-900">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full bg-gray-300 rounded-md border border-gray-300 px-3 py-2"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-900">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full bg-gray-300 rounded-md border border-gray-300 px-3 py-2"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900">Topic</label>
            <input
              type="text"
              required
              className="mt-1 block w-full bg-gray-300 rounded-md border border-gray-300 px-3 py-2"
              onChange={(e) => setFormData({...formData, topic: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold text-blue-900 mb-2">
                Select Available Date
                <span className="block text-sm text-blue-500">
                  Available on Wednesday, Friday, and Saturday
                </span>
              </label>
              <Calendar onSelect={handleDateSelect}
                mode="single"
                selected={selectedDate}
                className="rounded-md border"
                disabled={(date) => {
                  return (
                    date < new Date() || // Disable past dates
                    !isDateAvailable(date) // Only allow specified days
                  )
                }}
              />
            </div>


            <div>
              <label className="block text-lg font-bold text-blue-900 mb-2 ">
                Available Time Slots <br />
                {selectedDate && (
                  <span className="ml-2 text-sm text-gray-900">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </label>
              <div className="grid grid-cols-2 gap-2  border rounded-md border-blue-900 p-2">
                {!selectedDate ? (
                  <p className="text-blue-900 col-span-2">Please select a date first</p>
                ) : availableTimeSlots.length === 0 ? (
                  <p className="text-gray-500 col-span-2">No available slots for this date</p>
                ) : (
                  availableTimeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      className={`px-4 py-2 border  rounded-md transition-colors ${
                        selectedTime === time 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    >
                      {time}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900">Additional Message</label>
            <textarea
              rows={4}
              className="mt-1 block w-full bg-gray-300 rounded-md border border-gray-300 px-3 py-2"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  )
}

export default ScheduleMeeting
