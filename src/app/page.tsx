export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-green-300 via-teal-200 to-purple-300 opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
      <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full blur-2xl opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-40 animate-pulse delay-2000"></div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Modern Hero Section */}
          <div className="mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-white/30">
              <span className="text-2xl mr-2">✨</span>
              <span className="text-sm font-medium text-gray-700">Your productivity companion</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              One Piece
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Task management that actually <span className="text-purple-600 underline decoration-wavy">vibes</span> ✨
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Finally, a productivity app that gets you. Track tasks, plan events, and journal thoughts 
              in a space designed for your mental health and wellbeing 🧠💚
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <a 
                href="/auth/signup"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mindful-button overflow-hidden min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Journey 🚀
                </span>
              </a>
              <a 
                href="/auth/signin"
                className="group px-8 py-4 bg-white/30 backdrop-blur-lg text-gray-800 font-bold rounded-2xl border-2 border-white/50 hover:border-purple-300 hover:bg-white/50 transition-all duration-300 min-w-[200px]"
              >
                Welcome Back 👋
              </a>
            </div>
          </div>

          {/* Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-white/20 backdrop-blur-xl p-8 rounded-3xl border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Tasks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Organize your life with AI-powered suggestions and gentle reminders that actually help instead of stress you out
                </p>
              </div>
            </div>

            <div className="group relative bg-white/20 backdrop-blur-xl p-8 rounded-3xl border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🗓️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Calendar Magic</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visual planning that makes sense. Drag, drop, and organize your time in a way that feels natural and fun
                </p>
              </div>
            </div>

            <div className="group relative bg-white/20 backdrop-blur-xl p-8 rounded-3xl border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">💚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mental Health First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built by humans who care. Every feature designed to support your wellbeing, not drain your energy
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 mb-16">
            <p className="text-sm text-gray-500 mb-4">LOVED BY STUDENTS EVERYWHERE</p>
            <div className="flex justify-center items-center gap-8 text-6xl mb-4">
              <span className="hover:scale-125 transition-transform cursor-default">📚</span>
              <span className="hover:scale-125 transition-transform cursor-default">🎓</span>
              <span className="hover:scale-125 transition-transform cursor-default">💯</span>
              <span className="hover:scale-125 transition-transform cursor-default">🌟</span>
              <span className="hover:scale-125 transition-transform cursor-default">🎉</span>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              "Finally, an app that doesn't make me feel guilty about not being productive 24/7" 
            </p>
            <p className="text-sm text-gray-500 mt-2">- Every student who tried One Piece</p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to get your life together? (In a chill way)</p>
            <a 
              href="/auth/signup"
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 mindful-button"
            >
              Let's Go! 🚀✨
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}