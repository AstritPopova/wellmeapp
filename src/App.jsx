import { useEffect, useState } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import { Splash } from './pages/Splash'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Activity } from './pages/Activity'
import { Statistics } from './pages/Statistics'
import { Profile } from './pages/Profile'
import { NavBar } from './components/NavBar'

const SPLASH_MS = 3000

const initialState = {
  steps: 7500,
  waterGlasses: 5,
  sleepMin: 450,
  mood: 'Hyvä',
  activities: [
    { id: 1, type: 'Kävely', minutes: 30, date: new Date().toDateString() },
  ],
}

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [data, setData] = useState(initialState)
  const [user, setUser] = useState(null)

  // Splash ruudulla 3 sekuntia
  useEffect(() => {
    if (screen === 'splash') {
      const t = setTimeout(() => setScreen('login'), SPLASH_MS)
      return () => clearTimeout(t)
    }
  }, [screen])

  const handleLogin = (email) => {
    setUser({ email, name: email?.split('@')[0] || 'Vierailija' })
    setScreen('home')
  }

  const saveActivity = (entry) => {
    setData((d) => ({
      ...d,
      activities: [{ id: Date.now(), ...entry }, ...d.activities],
      steps: d.steps + (entry.type === 'Kävely' ? 3000 : 0),
      waterGlasses: d.waterGlasses + (entry.type === 'Vesi' ? 1 : 0),
      sleepMin: d.sleepMin + (entry.type === 'Uni' ? entry.minutes || 0 : 0),
      mood: entry.type === 'Mieliala' ? entry.mood || d.mood : d.mood,
    }))
    setScreen('home')
  }

  // 1) Splash-näkymä
  if (screen === 'splash') {
    return <Splash />
  }

  // 2) Login-näkymä
  if (screen === 'login') {
    return <Login onLogin={handleLogin} />
  }

  // 3) Kaikki muut näytöt tumman taustan päällä
  return (
    <IonPage>
      <IonContent fullscreen className="bg-transparent">
        <div className="mx-auto min-h-screen max-w-md text-white pb-16">
          {screen === 'home' && (
            <Home data={data} onAdd={() => setScreen('activity')} />
          )}

          {screen === 'activity' && (
            <Activity onBack={() => setScreen('home')} onSave={saveActivity} />
          )}

          {screen === 'stats' && (
            <Statistics data={data} onBack={() => setScreen('home')} />
          )}

          {screen === 'profile' && (
            <Profile user={user} onBack={() => setScreen('home')} />
          )}
        </div>
      </IonContent>

      {/* Alaosan tab-navigaatio */}
      <NavBar screen={screen} setScreen={setScreen} />
    </IonPage>
  )
}
