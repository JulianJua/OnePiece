export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-hunter-900 mb-6">
          Welcome to <span className="text-hunter-600">One Piece</span>
        </h1>
        <p className="text-xl text-hunter-700 mb-8">
          Your mindful companion for task management and calendar organization. 
          Find peace in productivity with our mental health-focused design.
        </p>
        
        <div className="flex gap-4 justify-center mb-16">
          <a 
            href="/auth/signup"
            className="bg-hunter-600 hover:bg-hunter-700 text-pistachio-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Sign Up
          </a>
          <a 
            href="/auth/signin"
            className="bg-pistachio-400 hover:bg-pistachio-500 text-hunter-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Login
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-pistachio-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-hunter-800 mb-2">Task Management</h3>
            <p className="text-hunter-600">
              Organize your to-dos with a gentle, stress-free approach that respects your mental well-being.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-pistachio-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold text-hunter-800 mb-2">Calendar Integration</h3>
            <p className="text-hunter-600">
              Keep track of important dates and events with our intuitive calendar system.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-pistachio-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-hunter-800 mb-2">Mindful Design</h3>
            <p className="text-hunter-600">
              Built with mental health in mind, featuring calming colors and thoughtful interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}