'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function NotesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
      return
    }
    // For now, we'll use local storage. In a full implementation, you'd save to the database
    const savedNote = localStorage.getItem(`notes-${session.user.id}`)
    if (savedNote) {
      setNote(savedNote)
      const savedTime = localStorage.getItem(`notes-saved-${session.user.id}`)
      if (savedTime) {
        setLastSaved(new Date(savedTime))
      }
    }
    setLoading(false)
  }, [session, status, router])

  const handleSave = async () => {
    if (!session?.user?.id) return

    setSaving(true)
    try {
      // In a full implementation, you'd save to the database via API
      localStorage.setItem(`notes-${session.user.id}`, note)
      const now = new Date()
      localStorage.setItem(`notes-saved-${session.user.id}`, now.toISOString())
      setLastSaved(now)
    } catch (error) {
      console.error('Error saving note:', error)
    } finally {
      setSaving(false)
    }
  }

  const mindfulPrompts = [
    "What am I grateful for today? 🙏",
    "How am I feeling right now, and why? 💭",
    "What small win can I celebrate today? 🎉",
    "What would I like to let go of? 🍃",
    "How did I practice kindness today? 💚",
    "What brought me joy or peace today? ✨",
    "What lesson did I learn today? 📚",
    "How can I be more present tomorrow? 🌱",
  ]

  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null)

  const insertPrompt = (prompt: string) => {
    const currentNote = note
    const newNote = currentNote ? `${currentNote}\n\n${prompt}\n` : `${prompt}\n`
    setNote(newNote)
    setSelectedPrompt(null)
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
            <h1 className="text-3xl font-bold text-hunter-900">Notes & Reflections</h1>
            <p className="text-hunter-700 mt-1">
              Your personal space for thoughts, reflections, and mindfulness 🌿
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            {lastSaved && (
              <span className="text-sm text-hunter-600">
                Last saved: {lastSaved.toLocaleString()}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-hunter-600 hover:bg-hunter-700 disabled:bg-hunter-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {saving ? 'Saving...' : 'Save Notes'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Notes Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full h-96 p-4 border border-pistachio-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent bg-white/70"
                placeholder="Start writing your thoughts, reflections, or anything that comes to mind...

Take your time. There's no pressure here. This is your safe space to express yourself freely. 

Remember: Progress over perfection. Every word you write is a step forward in your journey. 🌱"
              />
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-hunter-600">
                  {note.length} characters • {note.split('\n').length} lines
                </div>
                <div className="text-sm text-hunter-600">
                  Auto-saved locally as you type
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mindful Prompts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-hunter-800 mb-4 flex items-center">
                💭 Mindful Prompts
              </h2>
              <div className="space-y-2">
                {mindfulPrompts.slice(0, 4).map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => insertPrompt(prompt)}
                    className="w-full text-left p-3 bg-pistachio-50 hover:bg-pistachio-100 rounded-lg text-sm text-hunter-700 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedPrompt(selectedPrompt ? null : 'all')}
                className="w-full mt-4 text-center p-2 bg-pistachio-200 hover:bg-pistachio-300 rounded-lg text-sm text-hunter-800 font-medium transition-colors"
              >
                {selectedPrompt ? 'Show Less' : 'Show More Prompts'}
              </button>

              {selectedPrompt === 'all' && (
                <div className="mt-4 space-y-2">
                  {mindfulPrompts.slice(4).map((prompt, index) => (
                    <button
                      key={index + 4}
                      onClick={() => insertPrompt(prompt)}
                      className="w-full text-left p-3 bg-pistachio-50 hover:bg-pistachio-100 rounded-lg text-sm text-hunter-700 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-hunter-800 mb-4 flex items-center">
                💡 Writing Tips
              </h2>
              <div className="space-y-3 text-sm text-hunter-700">
                <div className="flex items-start space-x-2">
                  <span className="text-pistachio-600">•</span>
                  <span>Write without judgment - let thoughts flow naturally</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pistachio-600">•</span>
                  <span>Focus on how you feel, not what you "should" write</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pistachio-600">•</span>
                  <span>Use prompts when you need inspiration</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pistachio-600">•</span>
                  <span>There's no right or wrong way to reflect</span>
                </div>
              </div>
            </div>

            {/* Mindful Moment */}
            <div className="bg-gradient-to-br from-pistachio-100 to-pistachio-200 rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-hunter-800 mb-3 flex items-center">
                🧘‍♀️ Take a Moment
              </h2>
              <p className="text-sm text-hunter-700 mb-4">
                Before you continue writing, take three deep breaths. Notice how you feel right now.
              </p>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}