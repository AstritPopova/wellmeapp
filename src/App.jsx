import React, { useEffect, useState } from 'react'
import { Splash } from './pages/Splash'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Activity } from './pages/Activity'
import { Statistics } from './pages/Statistics'
import { Profile } from './pages/Profile'
import { NavBar } from './components/NavBar'

export default function App(){
  const [screen, setScreen] = useState('splash')
  const [data, setData] = useState({
    steps: 7500,
    waterGlasses: 5,
    sleepMin: 450,
    mood: 'Hyvä',
    activities: [
      { id: 1, type: 'Kävely', minutes: 30, date: new Date().toDateString() },
    ],
  })
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (screen === 'splash'){
      const t = setTimeout(() => setScreen('login'), 2300)
      return () => clearTimeout(t)
    }
  }, [screen])

  const handleLogin = (email) => {
    setUser({ email, name: email?.split('@')[0] || 'Vierailija' })
    setScreen('home')
  }

  const saveActivity = (entry) => {
    setData(d => ({
      ...d,
      activities: [{ id: Date.now(), ...entry }, ...d.activities],
      steps: d.steps + (entry.type === 'Kävely' ? 3000 : 0),
      waterGlasses: d.waterGlasses + (entry.type === 'Vesi' ? 1 : 0),
      sleepMin: d.sleepMin + (entry.type === 'Uni' ? (entry.minutes||0) : 0),
      mood: entry.type === 'Mieliala' ? (entry.mood||d.mood) : d.mood,
    }))
    setScreen('home')
  }

  return (
    <div className="mx-auto min-h-screen max-w-md text-white">
      {screen === 'splash' && <Splash />}
      {screen === 'login' && <Login onLogin={handleLogin} />}
      {screen === 'home' && <Home data={data} onAdd={() => setScreen('activity')} />}
      {screen === 'activity' && <Activity onBack={() => setScreen('home')} onSave={saveActivity} />}
      {screen === 'stats' && <Statistics data={data} onBack={() => setScreen('home')} />}
      {screen === 'profile' && <Profile user={user} onBack={() => setScreen('home')} />}
      <NavBar screen={screen} setScreen={setScreen} />
    </div>
  )
}
