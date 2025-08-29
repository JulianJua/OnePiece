'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header - Exact Match */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-blue-600">One Piece's Portfolio</div>
            <div className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">About</a>
              <a href="#projects" className="text-gray-800 hover:text-gray-600 font-medium">Projects</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">Skills</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact Layout Match */}
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            {/* Left Side - Text Content */}
            <div className="w-1/2 pr-16">
              <h1 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Hello, I'm One Piece!
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                Task Manager @ Your Service
              </p>
              <p className="text-lg text-gray-600 mb-12">
                I like organizing things.
              </p>
              <div className="flex gap-6">
                <button 
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  View My Work
                </button>
                <button 
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => window.location.href = '/auth/signin'}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            {/* Right Side - Profile Image */}
            <div className="w-1/2 flex justify-end">
              <div className="w-96 h-96 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-9xl">⚓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects Section - Exact Card Match */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Project Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-blue-600 flex items-center justify-center">
                <span className="text-7xl text-white">🎮</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Task Game</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A gamified task management experience with dynamic progress tracking, achievement systems, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">CSS3</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-blue-600 flex items-center justify-center">
                <span className="text-7xl text-white">📱</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Task Management App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Vue.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Firebase</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">CSS3</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-blue-600 flex items-center justify-center">
                <span className="text-7xl text-white">📊</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">D3.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}