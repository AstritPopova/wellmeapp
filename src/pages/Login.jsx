import { useState } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import { TopBar } from '../components/TopBar'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <IonPage>
      <TopBar title="Kirjaudu sisään" />
      <IonContent fullscreen className="bg-transparent">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Card>
            <label className="mb-2 block text-sm font-medium text-white/90">
              Sähköposti
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nimi@example.com"
            />

            <label className="mb-2 mt-4 block text-sm font-medium text-white/90">
              Salasana
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

            <div className="mt-4">
              {/* Button-komponentin oletus type on "button" → ei lomakkeen submitiä */}
              <Button onClick={() => onLogin(email)}>
                Kirjaudu sisään
              </Button>
            </div>
          </Card>

          <p className="text-center text-sm text-white/70">
            Tai jatka vierailijana – jätä kentät tyhjiksi ja paina Kirjaudu.
          </p>
        </div>
      </IonContent>
    </IonPage>
  )
}
