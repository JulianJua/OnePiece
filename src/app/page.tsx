export default function Home() {
  return (
    <div className="min-h-screen bg-pistachio-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-pistachio-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-hunter-600">TaskFlow</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-hunter-700 hover:text-hunter-500 font-medium">Home</a>
              <a href="#" className="text-hunter-700 hover:text-hunter-500 font-medium">Features</a>
              <a href="#" className="text-hunter-700 hover:text-hunter-500 font-medium">About</a>
              <a href="#" className="text-hunter-700 hover:text-hunter-500 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-6xl lg:text-7xl font-bold text-hunter-900 mb-6 leading-tight">
              Hello, I'm TaskFlow!
            </h1>
            <p className="text-xl text-hunter-600 mb-6 font-light">
              Task Management Made Simple
            </p>
            <p className="text-lg text-hunter-500 mb-8 leading-relaxed">
              I help you organize tasks efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/auth/signup"
                className="px-8 py-4 bg-hunter-600 text-white font-semibold rounded-lg hover:bg-hunter-700 transition-colors duration-200 text-center"
              >
                Get Started
              </a>
              <a 
                href="/auth/signin"
                className="px-8 py-4 border-2 border-hunter-600 text-hunter-600 font-semibold rounded-lg hover:bg-hunter-50 transition-colors duration-200 text-center"
              >
                Sign In
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-hunter-100 to-pistachio-200 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-8xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hunter-900 mb-4">Featured Tools</h2>
            <div className="w-16 h-1 bg-hunter-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Task Management */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-hunter-600 flex items-center justify-center">
                <span className="text-6xl text-white">📋</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-hunter-900 mb-4">Smart Task Manager</h3>
                <p className="text-hunter-600 mb-6 leading-relaxed">
                  A powerful task management system with intuitive drag-and-drop functionality, priority levels, and deadline tracking to keep you organized and productive.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-700 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-700 rounded-full text-sm font-medium">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Calendar Integration */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-hunter-600 flex items-center justify-center">
                <span className="text-6xl text-white">📅</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-hunter-900 mb-4">Calendar Integration</h3>
                <p className="text-hunter-600 mb-6 leading-relaxed">
                  Seamlessly integrate your tasks with a beautiful calendar view. Schedule events, set reminders, and visualize your productivity journey in one place.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-700 rounded-full text-sm font-medium">Calendar API</span>
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-700 rounded-full text-sm font-medium">Scheduling</span>
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-700 rounded-full text-sm font-medium">Reminders</span>
                </div>
              </div>
            </div>

            {/* Notes & Journal */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-hunter-600 flex items-center justify-center">
                <span className="text-6xl text-white">📝</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-hunter-900 mb-4">Notes & Journaling</h3>
                <p className="text-hunter-600 mb-6 leading-relaxed">
                  Capture thoughts, ideas, and reflections with our integrated note-taking system. Support for rich text formatting and seamless organization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-700 rounded-full text-sm font-medium">Rich Text</span>
                  <span className="px-3 py-1 bg-pistachio-100 text-hunter-700 rounded-full text-sm font-medium">Markdown</span>
                  <span className="px-3 py-1 bg-hunter-100 text-hunter-700 rounded-full text-sm font-medium">Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}