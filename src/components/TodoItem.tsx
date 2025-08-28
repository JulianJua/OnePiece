'use client'

import { useState } from 'react'
import { format } from 'date-fns'

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

interface TodoItemProps {
  todo: Todo
  onUpdate: (id: string, updates: Partial<Todo>) => void
  onDelete: (id: string) => void
}

const priorityColors = {
  LOW: 'bg-gray-100 text-gray-800',
  MEDIUM: 'bg-blue-100 text-blue-800',
  HIGH: 'bg-yellow-100 text-yellow-800',
  URGENT: 'bg-red-100 text-red-800',
}

const priorityEmojis = {
  LOW: '🟢',
  MEDIUM: '🟡',
  HIGH: '🟠',
  URGENT: '🔴',
}

export default function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDescription, setEditDescription] = useState(todo.description || '')

  const handleToggleComplete = () => {
    onUpdate(todo.id, { completed: !todo.completed })
  }

  const handleSaveEdit = () => {
    onUpdate(todo.id, { 
      title: editTitle,
      description: editDescription || undefined
    })
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditTitle(todo.title)
    setEditDescription(todo.description || '')
    setIsEditing(false)
  }

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy')
    } catch {
      return dateString
    }
  }

  if (isEditing) {
    return (
      <div className="border border-pistachio-300 rounded-lg p-4 bg-pistachio-50/50">
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border border-pistachio-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hunter-500"
            placeholder="Task title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full px-3 py-2 border border-pistachio-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hunter-500"
            placeholder="Description (optional)"
            rows={2}
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSaveEdit}
              className="bg-hunter-600 hover:bg-hunter-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`border rounded-lg p-4 transition-all ${
      todo.completed 
        ? 'bg-pistachio-50/30 border-pistachio-200' 
        : 'bg-white border-pistachio-300 hover:shadow-md'
    }`}>
      <div className="flex items-start space-x-3">
        <button
          onClick={handleToggleComplete}
          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-hunter-600 border-hunter-600 text-white'
              : 'border-pistachio-400 hover:border-hunter-500'
          }`}
        >
          {todo.completed && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className={`font-medium ${
              todo.completed ? 'line-through text-hunter-400' : 'text-hunter-900'
            }`}>
              {todo.title}
            </h3>
            
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityColors[todo.priority]}`}>
              <span className="mr-1">{priorityEmojis[todo.priority]}</span>
              {todo.priority.toLowerCase()}
            </span>
          </div>

          {todo.description && (
            <p className={`mt-1 text-sm ${
              todo.completed ? 'text-hunter-400' : 'text-hunter-600'
            }`}>
              {todo.description}
            </p>
          )}

          <div className="mt-2 flex items-center space-x-4 text-xs text-hunter-500">
            <span>Created {formatDate(todo.createdAt)}</span>
            {todo.dueDate && (
              <span className="flex items-center">
                📅 Due {formatDate(todo.dueDate)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-hunter-600 hover:text-hunter-800 p-1 rounded transition-colors"
            title="Edit task"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
            title="Delete task"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}