'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Todo {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  dueDate?: string
  createdAt: string
  updatedAt: string
}

interface AddTodoFormProps {
  onAdd: (todo: Partial<Todo>) => void
  onClose: () => void
}

export default function AddTodoForm({ onAdd, onClose }: AddTodoFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'>('MEDIUM')
  const [dueDate, setDueDate] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) {
      return
    }

    setLoading(true)

    const todoData = {
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      dueDate: dueDate?.toISOString(),
    }

    try {
      await onAdd(todoData)
      setTitle('')
      setDescription('')
      setPriority('MEDIUM')
      setDueDate(null)
    } finally {
      setLoading(false)
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
            <h3 className="text-lg font-semibold text-hunter-900">Add New Task</h3>
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
                Task Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
                placeholder="What needs to be done?"
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

            {/* Priority */}
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-hunter-800 mb-1">
                Priority
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT')}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
              >
                <option value="LOW">🟢 Low</option>
                <option value="MEDIUM">🟡 Medium</option>
                <option value="HIGH">🟠 High</option>
                <option value="URGENT">🔴 Urgent</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium text-hunter-800 mb-1">
                Due Date (Optional)
              </label>
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                className="w-full px-3 py-2 border border-pistachio-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:border-transparent"
                placeholderText="Select a due date"
                dateFormat="MMM dd, yyyy"
                minDate={new Date()}
              />
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                disabled={!title.trim() || loading}
                className="flex-1 bg-hunter-600 hover:bg-hunter-700 disabled:bg-hunter-400 text-white py-2 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-hunter-500 focus:ring-offset-2"
              >
                {loading ? 'Creating...' : 'Create Task'}
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