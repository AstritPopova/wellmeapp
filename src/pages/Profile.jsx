import { TopBar } from '../components/TopBar'
import { Card } from '../components/Card'
import { User } from 'lucide-react'

export function Profile({ user, onBack }){
  return (
    <div className="pb-24">
      <TopBar title="Profiili" onBack={onBack} />
      <div className="grid gap-3 p-4">
        <Card className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#6CC4A1] text-white">
            <User />
          </div>
          <div>
            <div className="font-semibold">{user?.name || 'Vierailija'}</div>
            <div className="text-sm text-gray-500">{user?.email || 'ei kirjautunut'}</div>
          </div>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold">Asetukset</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">Ilmoitukset <span className="rounded-full bg-gray-100 px-2 py-1">Tulossa</span></li>
            <li className="flex items-center justify-between">Teema <span className="rounded-full bg-gray-100 px-2 py-1">Vaalea</span></li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
