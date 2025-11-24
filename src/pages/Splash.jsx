import { Smile } from 'lucide-react'

export function Splash(){
  return (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center space-y-4">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full
                        bg-gradient-to-br from-well.mint to-well.sky text-white shadow-2xl">
          <Smile size={48} />
        </div>
        <div className="h1">WellMe</div>
        <div className="text-white/70">Hyvinvointia arkeen</div>
      </div>
    </div>
  )
}
