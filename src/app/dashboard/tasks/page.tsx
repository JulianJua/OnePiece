'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import TodoItem from '@/components/TodoItem'
import AddTodoForm from '@/components/AddTodoForm'

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

export default function TasksPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
      return
    }
    fetchTodos()
  }, [session, status, router])

  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos')
      if (response.ok) {
        const data = await response.json()
        setTodos(data)
      }
    } catch (error) {
      console.error('Error fetching todos:', error)
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (todoData: Partial<Todo>) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      })

      if (response.ok) {
        const newTodo = await response.json()
        setTodos(prev => [newTodo, ...prev])
        setShowAddForm(false)
      }
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        const updatedTodo = await response.json()
        setTodos(prev => prev.map(todo => 
          todo.id === id ? updatedTodo : todo
        ))
      }
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'pending':
        return !todo.completed
      case 'completed':
        return todo.completed
      default:
        return true
    }
  })

  const completedCount = todos.filter(t => t.completed).length
  const pendingCount = todos.filter(t => !t.completed).length

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
            <h1 className="text-3xl font-bold text-hunter-900">Your Tasks</h1>
            <p className="text-hunter-700 mt-1">
              {pendingCount} pending • {completedCount} completed
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="mt-4 sm:mt-0 bg-hunter-600 hover:bg-hunter-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
          >
            <span className="mr-2">+</span>
            Add Task
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-pistachio-200 rounded-full">
                <span className="text-xl">📝</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">{todos.length}</p>
                <p className="text-hunter-600">Total Tasks</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-200 rounded-full">
                <span className="text-xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">{pendingCount}</p>
                <p className="text-hunter-600">Pending</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-200 rounded-full">
                <span className="text-xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-hunter-900">{completedCount}</p>
                <p className="text-hunter-600">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-xl p-2">
          {(['all', 'pending', 'completed'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-hunter-600 text-white'
                  : 'text-hunter-700 hover:bg-pistachio-100'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Tasks List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-pistachio-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <p className="text-hunter-600 mb-4">
                {filter === 'all' 
                  ? "No tasks yet. Create your first task to get started!"
                  : `No ${filter} tasks. Keep up the good work! 🌿`
                }
              </p>
              {filter === 'all' && (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-pistachio-400 hover:bg-pistachio-500 text-hunter-900 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Create Your First Task
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onUpdate={updateTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Todo Modal */}
      {showAddForm && (
        <AddTodoForm
          onAdd={addTodo}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </DashboardLayout>
  )
}