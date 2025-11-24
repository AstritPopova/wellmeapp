import { Activity as ActivityIcon, Droplet, Moon, Smile, Plus } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { TopBar } from '../components/TopBar'
import { formatMinutes } from '../utils/format'

export function Home({ data, onAdd }){
  return (
    <div className="pb-24">
      <TopBar title="Päivän yhteenveto" />
      <div className="grid gap-4 p-4">
        {/* Hero card */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/70 text-sm">Tänään</div>
              <div className="h2 mt-1">Hyvinvointi overview</div>
            </div>
            <div className="rounded-2xl px-3 py-2 bg-white/10 text-white/90 text-xs">
              Tavoite 10t askelta
            </div>
          </div>
        </Card>

        {/* Four small metric cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="flex items-center gap-3 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-well.mint to-well.sky">
              <ActivityIcon />
            </div>
            <div>
              <div className="text-white/70 text-xs">Askeleet</div>
              <div className="text-lg font-semibold">{data.steps.toLocaleString()}</div>
            </div>
          </Card>

          <Card className="flex items-center gap-3 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-well.sky to-well.mint">
              <Droplet />
            </div>
            <div>
              <div className="text-white/70 text-xs">Vesi</div>
              <div className="text-lg font-semibold">{data.waterGlasses}/8</div>
            </div>
          </Card>

          <Card className="flex items-center gap-3 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-well.mint to-emerald-400">
              <Moon />
            </div>
            <div>
              <div className="text-white/70 text-xs">Uni</div>
              <div className="text-lg font-semibold">{formatMinutes(data.sleepMin)}</div>
            </div>
          </Card>

          <Card className="flex items-center gap-3 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-well.sky">
              <Smile />
            </div>
            <div>
              <div className="text-white/70 text-xs">Mieliala</div>
              <div className="text-lg font-semibold">{data.mood}</div>
            </div>
          </Card>
        </div>

        <Button onClick={onAdd} className="mt-1 flex items-center justify-center gap-2">
          <Plus size={18} /> Lisää merkintä
        </Button>

        <Card>
          <h3 className="font-semibold mb-2">Viimeisimmät aktiviteetit</h3>
          <ul className="space-y-2 text-sm">
            {data.activities.slice(0,5).map(a => (
              <li key={a.id} className="flex items-center justify-between">
                <span>{a.type}</span>
                <span className="text-white/70">{a.minutes ? `${a.minutes} min` : '—'}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
