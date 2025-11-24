import { useMemo } from 'react'
import { TopBar } from '../components/TopBar'
import { Card } from '../components/Card'
import { Metric } from '../components/Metric'
import { Droplet, Moon, Smile, Activity as ActivityIcon } from 'lucide-react'
import { formatMinutes } from '../utils/format'

export function Statistics({ data, onBack }){
  const week = useMemo(() => {
    const base = [4000, 7500, 5200, 9000, 10000, 6700, 8300]
    return base.map((v, i) => ({ day: 'MA TI KE TO PE LA SU'.split(' ')[i], steps: v }))
  }, [])

  return (
    <div className="pb-24">
      <TopBar title="Tilastot" onBack={onBack} />
      <div className="grid gap-3 p-4">
        <Card>
          <h3 className="mb-2 font-semibold">Viikkonäkymä – askeleet</h3>
          <div className="flex items-end gap-2">
            {week.map(d => (
              <div key={d.day} className="flex w-full flex-col items-center gap-1">
                <div className="w-full rounded-t-md bg-gradient-to-t from-well.mint to-well.sky" style={{ height: `${Math.min(100, (d.steps / 10000) * 100)}px` }} />
                <span className="text-[10px] text-gray-500">{d.day}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="grid grid-cols-2 gap-3">
          <Metric compact icon={<Droplet />} label="Vesi" value={`${data.waterGlasses}/8`} />
          <Metric compact icon={<Moon />} label="Uni" value={formatMinutes(data.sleepMin)} />
          <Metric compact icon={<Smile />} label="Mieliala" value={data.mood} />
          <Metric compact icon={<ActivityIcon />} label="Aktiviteetit" value={`${data.activities.length}`} />
        </Card>
      </div>
    </div>
  )
}
