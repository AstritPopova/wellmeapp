import { Card } from './Card'

export const Metric = ({ icon, label, value, sub, compact = false }) => (
  <Card className={`flex items-center gap-3 ${compact ? 'p-3' : ''}`}>
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gray-100 text-gray-700">{icon}</div>
    <div className="flex-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
      {sub && <div className="text-xs text-gray-400">{sub}</div>}
    </div>
  </Card>
)
