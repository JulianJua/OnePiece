'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center mental-health-gradient px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">😔</span>
        </div>
        
        <h1 className="text-2xl font-bold text-hunter-900 mb-4">
          Something went wrong
        </h1>
        
        <p className="text-hunter-700 mb-6">
          Don't worry - even the most peaceful journeys have bumps along the way. 
          Take a deep breath, and let's try again.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-hunter-600 hover:bg-hunter-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors mindful-button"
          >
            Try Again 🌿
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-pistachio-400 hover:bg-pistachio-500 text-hunter-900 py-3 px-6 rounded-lg font-semibold transition-colors mindful-button"
          >
            Go Home 🏠
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-white/60 rounded-lg">
          <p className="text-sm text-hunter-600 italic">
            "Every setback is a setup for a comeback. You've got this! 💚"
          </p>
        </div>
      </div>
    </div>
  )
}