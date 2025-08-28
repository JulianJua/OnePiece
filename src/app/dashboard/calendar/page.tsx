'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashboardLayout from '@/components/DashboardLayout'
import AddEventForm from '@/components/AddEventForm'

const localizer = momentLocalizer(moment)

interface Event {
  id: string
  title: string
  description?: string
  start: Date
  end: Date
  allDay: boolean
  color: string
  resource?: any
}

export default function CalendarPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null)
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
      return
    }
    fetchEvents()
  }, [session, status, router])

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events')
      if (response.ok) {
        const data = await response.json()
        const formattedEvents = data.map((event: any) => ({
          ...event,
          start: new Date(event.startDate),
          end: new Date(event.endDate || event.startDate),
        }))
        setEvents(formattedEvents)
      }
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const addEvent = async (eventData: any) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      if (response.ok) {
        const newEvent = await response.json()
        const formattedEvent = {
          ...newEvent,
          start: new Date(newEvent.startDate),
          end: new Date(newEvent.endDate || newEvent.startDate),
        }
        setEvents(prev => [...prev, formattedEvent])
        setShowAddForm(false)
        setSelectedSlot(null)
      }
    } catch (error) {
      console.error('Error adding event:', error)
    }
  }

  const handleSelectSlot = useCallback(({ start, end }: { start: Date; end: Date }) => {
    setSelectedSlot({ start, end })
    setShowAddForm(true)
  }, [])

  const handleSelectEvent = useCallback((event: Event) => {
    // Handle event selection - could open edit modal
    console.log('Selected event:', event)
  }, [])

  const eventStyleGetter = (event: Event) => {
    return {
      style: {
        backgroundColor: event.color || '#6bc149',
        borderRadius: '4px',
        border: 'none',
        color: 'white',
        fontSize: '0.875rem',
        padding: '2px 6px',
      }
    }
  }

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hunter-600"></div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-hunter-900">Calendar</h1>
            <p className="text-hunter-700 mt-1">
              {events.length} events • Click on empty space to add an event
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedSlot({ start: new Date(), end: new Date() })
              setShowAddForm(true)
            }}
            className="mt-4 sm:mt-0 bg-hunter-600 hover:bg-hunter-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
          >
            <span className="mr-2">+</span>
            Add Event
          </button>
        </div>

        {/* Calendar Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-pistachio-200 rounded-full">
                <span className="text-xl">📅</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">{events.length}</p>
                <p className="text-hunter-600">Total Events</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-200 rounded-full">
                <span className="text-xl">📆</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">
                  {events.filter(e => moment(e.start).isSame(moment(), 'month')).length}
                </p>
                <p className="text-hunter-600">This Month</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-200 rounded-full">
                <span className="text-xl">🌟</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">
                  {events.filter(e => moment(e.start).isSame(moment(), 'day')).length}
                </p>
                <p className="text-hunter-600">Today</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-200 rounded-full">
                <span className="text-xl">⏰</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">
                  {events.filter(e => moment(e.start).isSame(moment().add(1, 'week'), 'week')).length}
                </p>
                <p className="text-hunter-600">Next Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <div className="h-[600px]">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              views={['month', 'week', 'day', 'agenda']}
              view={view}
              onView={setView}
              date={date}
              onNavigate={setDate}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              eventPropGetter={eventStyleGetter}
              className="mental-health-calendar"
              messages={{
                next: "Next",
                previous: "Previous",
                today: "Today",
                month: "Month",
                week: "Week",
                day: "Day",
                agenda: "Agenda",
                noEventsInRange: "No events in this range. Click to add one! 🌱",
              }}
            />
          </div>
        </div>

        {/* Today's Events */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-hunter-800 mb-4 flex items-center">
            🌟 Today's Events
          </h2>
          {events.filter(e => moment(e.start).isSame(moment(), 'day')).length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-pistachio-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <p className="text-hunter-600">
                No events today. Take this time to rest and recharge! 🧘‍♀️
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {events
                .filter(e => moment(e.start).isSame(moment(), 'day'))
                .sort((a, b) => a.start.getTime() - b.start.getTime())
                .map(event => (
                  <div key={event.id} className="flex items-center space-x-4 p-3 bg-pistachio-50 rounded-lg">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: event.color }}
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-hunter-900">{event.title}</h3>
                      <p className="text-sm text-hunter-600">
                        {moment(event.start).format('h:mm A')}
                        {!event.allDay && ` - ${moment(event.end).format('h:mm A')}`}
                        {event.allDay && ' (All day)'}
                      </p>
                      {event.description && (
                        <p className="text-sm text-hunter-500 mt-1">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddForm && (
        <AddEventForm
          onAdd={addEvent}
          onClose={() => {
            setShowAddForm(false)
            setSelectedSlot(null)
          }}
          selectedSlot={selectedSlot}
        />
      )}
    </DashboardLayout>
  )
}