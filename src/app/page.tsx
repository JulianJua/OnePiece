'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header - Exact Portfolio Match */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold text-hunter-600">One Piece's Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact Julian Portfolio Layout */}
      <section id="home" className="bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left Side - Text Content */}
            <div className="flex-1 pr-12">
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm One Piece!
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Task Manager @ Your Service
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I like organizing things.
              </p>
              <div className="flex gap-4">
                <button 
                  className="px-6 py-3 bg-hunter-600 text-white font-semibold rounded-lg hover:bg-hunter-700 transition-colors duration-200"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  View My Work
                </button>
                <button 
                  className="px-6 py-3 border-2 border-hunter-600 text-hunter-600 font-semibold rounded-lg hover:bg-hunter-50 transition-colors duration-200"
                  onClick={() => window.location.href = '/auth/signin'}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            {/* Right Side - Profile Image Circle */}
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-pistachio-400 to-hunter-600 flex items-center justify-center">
                  <span className="text-8xl">⚓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Exact Portfolio Match */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-hunter-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 - Interactive Maze Game */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-hunter-600 flex items-center justify-center">
                <span className="text-6xl text-white">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Maze Game</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A challenging browser-based maze game with dynamic pathfinding, interactive controls, and engaging gameplay mechanics. Navigate through procedurally generated mazes with smooth animations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-800 rounded-full text-xs font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-800 rounded-full text-xs font-medium">HTML5 Canvas</span>
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-800 rounded-full text-xs font-medium">CSS3</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 - Task Management App */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-hunter-600 flex items-center justify-center">
                <span className="text-6xl text-white">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Task Management App</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-800 rounded-full text-xs font-medium">Vue.js</span>
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-800 rounded-full text-xs font-medium">Firebase</span>
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-800 rounded-full text-xs font-medium">CSS3</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Analytics Dashboard */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-hunter-600 flex items-center justify-center">
                <span className="text-6xl text-white">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-800 rounded-full text-xs font-medium">D3.js</span>
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-800 rounded-full text-xs font-medium">Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-16 h-1 bg-hunter-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">React</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">HTML5</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">CSS3</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Node.js</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Express</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Firebase</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">MongoDB</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Git</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Figma</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">VS Code</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Docker</span>
                <span className="px-3 py-1 bg-white rounded-lg shadow-sm text-sm">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-hunter-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            Ready to set sail on your productivity journey? Let's organize your tasks together!
          </p>
          <button 
            className="px-8 py-4 bg-hunter-600 text-white font-bold text-lg rounded-lg hover:bg-hunter-700 transition-colors duration-300"
            onClick={() => window.location.href = '/auth/signup'}
          >
            Start Your Adventure! ⚓
          </button>
        </div>
      </section>
    </div>
  )
}