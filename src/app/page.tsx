export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Ultra-modern animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(217,70,239,0.2),rgba(255,255,255,0))]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Ultra-modern Hero Section */}
          <div className="mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-2xl rounded-full px-6 py-3 mb-12 border border-white/20 shadow-2xl">
              <span className="text-2xl mr-3 animate-bounce">✨</span>
              <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">Your productivity companion</span>
            </div>
            
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-none tracking-tight">
                One Piece
              </h1>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 bg-clip-text text-transparent blur-3xl -z-10">
                One Piece
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Task management that actually <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent underline decoration-wavy decoration-yellow-400/50">vibes</span> ✨
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              Finally, a productivity app that gets you. Track tasks, plan events, and journal thoughts 
              in a space designed for your mental health and wellbeing 🧠💚
            </p>
            
            {/* Ultra-modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
              <a 
                href="/auth/signup"
                className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-110 transition-all duration-500 overflow-hidden min-w-[280px] border border-white/20"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-3">Start Your Journey</span>
                  <span className="text-2xl animate-bounce">🚀</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a 
                href="/auth/signin"
                className="group px-12 py-5 bg-white/5 backdrop-blur-2xl text-white font-bold text-lg rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-500 min-w-[280px] shadow-xl hover:shadow-2xl transform hover:scale-110"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">Welcome Back</span>
                  <span className="text-2xl">👋</span>
                </span>
              </a>
            </div>
          </div>

          {/* Ultra-modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:transform hover:scale-105 shadow-2xl">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 shadow-2xl shadow-cyan-500/25">
                    <span className="text-4xl filter drop-shadow-lg">📱</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">Smart Tasks</h3>
                  <p className="text-white/70 leading-relaxed text-lg font-light">
                    Organize your life with AI-powered suggestions and gentle reminders that actually help instead of stress you out
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:transform hover:scale-105 shadow-2xl">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 shadow-2xl shadow-purple-500/25">
                    <span className="text-4xl filter drop-shadow-lg">🗓️</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">Calendar Magic</h3>
                  <p className="text-white/70 leading-relaxed text-lg font-light">
                    Visual planning that makes sense. Drag, drop, and organize your time in a way that feels natural and fun
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:transform hover:scale-105 shadow-2xl">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 shadow-2xl shadow-emerald-500/25">
                    <span className="text-4xl filter drop-shadow-lg">💚</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors duration-300">Mental Health First</h3>
                  <p className="text-white/70 leading-relaxed text-lg font-light">
                    Built by humans who care. Every feature designed to support your wellbeing, not drain your energy
                  </p>
                </div>
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