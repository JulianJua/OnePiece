'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DashboardLayout from '@/components/DashboardLayout'

const localizer = momentLocalizer(moment)

interface Event {
  id: string
  title: string
  start: Date
  end: Date
  resource?: any
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/auth/signin')
      return
    }

    fetchData()
  }, [session, status, router])

  const fetchData = async () => {
    try {
      const [eventsRes, todosRes] = await Promise.all([
        fetch('/api/events'),
        fetch('/api/todos')
      ])

      if (eventsRes.ok) {
        const eventsData = await eventsRes.json()
        const formattedEvents = eventsData.map((event: any) => ({
          ...event,
          start: new Date(event.startDate),
          end: new Date(event.endDate || event.startDate),
        }))
        setEvents(formattedEvents)
      }

      if (todosRes.ok) {
        const todosData = await todosRes.json()
        setTodos(todosData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center mental-health-gradient">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hunter-600 mx-auto mb-4"></div>
          <p className="text-hunter-700">Loading your workspace...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-hunter-900 mb-2">
            Welcome back, {session.user?.name || 'Friend'}! 
          </h1>
          <p className="text-hunter-700">
            Let's make today productive and peaceful. 🌱
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-hunter-800 mb-4 flex items-center">
                📅 Your Calendar
              </h2>
              <div className="h-96">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: '100%' }}
                  views={['month', 'week', 'day']}
                  defaultView="month"
                  popup
                  className="mental-health-calendar"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-hunter-800 mb-4 flex items-center">
                ✅ Quick Tasks
              </h2>
              {todos.length === 0 ? (
                <p className="text-hunter-600 text-center py-8">
                  No tasks yet. Take a deep breath and start when you're ready.
                </p>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {todos.slice(0, 5).map((todo: any) => (
                    <div key={todo.id} className="flex items-center space-x-3 p-3 bg-pistachio-50 rounded-lg">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className="h-4 w-4 text-hunter-600 focus:ring-hunter-500"
                        readOnly
                      />
                      <span className={`flex-1 ${todo.completed ? 'line-through text-hunter-400' : 'text-hunter-800'}`}>
                        {todo.title}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <button className="w-full mt-4 bg-pistachio-400 hover:bg-pistachio-500 text-hunter-900 py-2 px-4 rounded-lg font-medium transition-colors">
                View All Tasks
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-hunter-800 mb-4 flex items-center">
                🌱 Today's Mindful Moment
              </h2>
              <div className="text-center">
                <p className="text-hunter-700 italic mb-4">
                  "Progress, not perfection. Every small step forward is a victory worth celebrating."
                </p>
                <div className="w-16 h-16 bg-pistachio-200 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌿</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}