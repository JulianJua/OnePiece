export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center mental-health-gradient">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-pistachio-200 border-t-hunter-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl breathing">🌱</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-hunter-900 mb-2">Loading One Piece</h2>
        <p className="text-hunter-700">Preparing your mindful workspace...</p>
      </div>
    </div>
  )
}