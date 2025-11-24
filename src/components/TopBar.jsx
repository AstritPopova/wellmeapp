import { ChevronLeft } from 'lucide-react'
export const TopBar = ({ title, onBack }) => (
  <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3
                  bg-white/5 backdrop-blur-md border-b border-white/10">
    {onBack && (
      <button onClick={onBack} className="rounded-full p-2 hover:bg-white/10">
        <ChevronLeft />
      </button>
    )}
    <h1 className="h2">{title}</h1>
  </div>
)
