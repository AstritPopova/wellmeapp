import { Activity as ActivityIcon, BarChart2, Home as HomeIcon, User } from 'lucide-react'

export const NavBar = ({ screen, setScreen }) => (
  <div className="sticky bottom-0 z-10 grid grid-cols-4 gap-2 p-2
                  bg-white/5 backdrop-blur-md border-t border-white/10">
    <NavButton active={screen === 'home'}    onClick={() => setScreen('home')}    icon={<HomeIcon />}     label="Koti" />
    <NavButton active={screen === 'activity'}onClick={() => setScreen('activity')}icon={<ActivityIcon />} label="Aktiviteetti" />
    <NavButton active={screen === 'stats'}   onClick={() => setScreen('stats')}   icon={<BarChart2 />}    label="Tilastot" />
    <NavButton active={screen === 'profile'} onClick={() => setScreen('profile')} icon={<User />}         label="Profiili" />
  </div>
)

const NavButton = ({ active, icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center rounded-xl p-2 transition
      ${active ? "text-well.mint" : "text-white/70"} hover:bg-white/10`}
  >
    <div className={`rounded-xl p-2 ${active ? "bg-white/10" : ""}`}>{icon}</div>
    <span className="text-[11px]">{label}</span>
  </button>
)
