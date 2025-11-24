import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { TopBar } from '../components/TopBar'

export function Login({ onLogin }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar title="Kirjaudu sisään" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Card>
          <label className="mb-2 block text-sm font-medium">Sähköposti</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nimi@example.com" className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-[#6CC4A1]" />
          <label className="mb-2 mt-4 block text-sm font-medium">Salasana</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-[#6CC4A1]" />
          <Button className="mt-4 flex items-center justify-center gap-2" onClick={() => onLogin(email)}>
            <LogIn size={18} /> Kirjaudu sisään
          </Button>
        </Card>
        <p className="text-center text-sm text-gray-500">Tai jatka vierailijana – jätä kentät tyhjiksi ja paina Kirjaudu.</p>
      </div>
    </div>
  )
}
