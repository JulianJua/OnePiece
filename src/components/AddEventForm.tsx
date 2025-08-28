'use client'

import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface AddEventFormProps {
  onAdd: (event: any) => void
  onClose: () => void
  selectedSlot?: { start: Date; end: Date } | null
}

const colorOptions = [
  { name: 'Hunter Green', value: '#355a35' },
  { name: 'Pistachio', value: '#6bc149' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Gray', value: '#6b7280' },
]

export default function AddEventForm({ onAdd, onClose, selectedSlot }: AddEventFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [allDay, setAllDay] = useState(false)
  const [color, setColor] = useState('#6bc149')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedSlot) {
      setStartDate(selectedSlot.start)
      setEndDate(selectedSlot.end)
      
      // If the slot spans multiple days or the times are the same, make it all day
      const isSameTime = selectedSlot.start.getTime() === selectedSlot.end.getTime()
      const spansDays = selectedSlot.start.toDateString() !== selectedSlot.end.toDateString()
      setAllDay(isSameTime || spansDays)
    }
  }, [selectedSlot])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) {
      return
    }

    setLoading(true)

    const eventData = {
      title: title.trim(),
      description: description.trim() || undefined,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      allDay,
      color,
    }

    try {
      await onAdd(eventData)
      setTitle('')
      setDescription('')
      setStartDate(new Date())
      setEndDate(new Date())
      setAllDay(false)
      setColor('#6bc149')
    } finally {
      setLoading(false)
    }
  }

  const handleStartDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date)
      // Auto-adjust end date if it's before start date
      if (endDate < date) {
        setEndDate(date)
      }
    }
  }

  const handleEndDateChange = (date: Date | null) => {
    if (date) {
      setEndDate(date)
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block w-full max-w-md p-6 my-8 text-left transition-all transform bg-white rounded-xl shadow-xl sm:align-middle">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-hunter-900">Add New Event</h3>
            <button
              onClick={onClose}
              className="text-hunter-400 hover:text-hunter-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-hunter-800 mb-1">
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
                placeholder="What's happening?"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-hunter-800 mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
                placeholder="Add more details..."
              />
            </div>

            {/* All Day Toggle */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="allDay"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
                className="h-4 w-4 text-hunter-600 focus:ring-hunter-500 border-pistachio-300 rounded"
              />
              <label htmlFor="allDay" className="ml-2 text-sm text-hunter-800">
                All day event
              </label>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-hunter-800 mb-1">
                Start {allDay ? 'Date' : 'Date & Time'}
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                showTimeSelect={!allDay}
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat={allDay ? "MMM dd, yyyy" : "MMM dd, yyyy h:mm aa"}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-hunter-800 mb-1">
                End {allDay ? 'Date' : 'Date & Time'}
              </label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                showTimeSelect={!allDay}
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat={allDay ? "MMM dd, yyyy" : "MMM dd, yyyy h:mm aa"}
                minDate={startDate}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-hunter-800 mb-2">
                Event Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {colorOptions.map((colorOption) => (
                  <button
                    key={colorOption.value}
                    type="button"
                    onClick={() => setColor(colorOption.value)}
                    className={`w-full h-10 rounded-lg border-2 transition-all ${
                      color === colorOption.value 
                        ? 'border-hunter-600 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: colorOption.value }}
                    title={colorOption.name}
                  >
                    {color === colorOption.value && (
                      <svg className="w-5 h-5 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                disabled={!title.trim() || loading}
                className="flex-1 bg-hunter-600 hover:bg-hunter-700 disabled:bg-hunter-400 text-white py-2 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:ring-offset-2"
              >
                {loading ? 'Creating...' : 'Create Event'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}