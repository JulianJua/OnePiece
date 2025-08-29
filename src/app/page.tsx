'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-blue-600">One Piece</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Projects</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Skills</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hello, I'm One Piece!
            </h1>
            <p className="text-xl text-gray-600 mb-4 font-light">
              Task Management Made Simple
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I make organizing things fun and efficient.
            </p>
            <div className="flex gap-4">
              <button 
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={() => window.location.href = '/dashboard'}
              >
                View My Work
              </button>
              <button 
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
                onClick={() => window.location.href = '/auth/signin'}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-inner">
                    <span className="text-8xl animate-bounce">⚓</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Task Management Project */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <span className="text-6xl text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">🎮</span>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-white rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Task Game</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  A gamified task management experience with dynamic progress tracking, achievement systems, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">CSS3</span>
                </div>
              </div>
            </div>

            {/* Calendar Project */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <span className="text-6xl text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">📱</span>
                <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Calendar App</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  A responsive calendar application with drag-and-drop functionality, real-time updates, and seamless mobile integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Vue.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Firebase</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">CSS3</span>
                </div>
              </div>
            </div>

            {/* Analytics Project */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <span className="text-6xl text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">📊</span>
                <div className="absolute bottom-4 left-4 w-5 h-5 bg-white rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">D3.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to set sail on your productivity journey?</h3>
          <p className="text-lg text-gray-600 mb-8">Join thousands of users who've found their One Piece of perfect organization.</p>
          <button 
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/auth/signup'}
          >
            Start Your Adventure! ⚓
          </button>
        </div>
      </section>
    </div>
  )
}