import { useState } from "react";
import { TopBar } from "../components/TopBar";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

const types = ["Kävely", "Uni", "Vesi", "Mieliala"];

export function Activity({ onBack, onSave }) {
  const [type, setType] = useState("Kävely");
  const [minutes, setMinutes] = useState(30);
  const [mood, setMood] = useState("Hyvä");

  const showMinutes = type === "Kävely" || type === "Uni";
  const showMood = type === "Mieliala";

  return (
    <div className="pb-24">
      <TopBar title="Lisää aktiviteetti" onBack={onBack} />
      <div className="grid gap-3 p-4">
        {/* Aktiviteetin tyyppi */}
        <Card>
          <label className="mb-2 block text-sm font-medium text-white/90">Tyyppi</label>
          <div className="grid grid-cols-4 gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  t === type
                    ? "border-[#6CC4A1] bg-[#6CC4A1]/20 text-[#6CC4A1]"
                    : "border-white/20 text-white/80 hover:border-[#6CC4A1]/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Card>

        {/* Kesto */}
        {showMinutes && (
          <Card>
            <label className="mb-2 block text-sm font-medium text-white/90">Kesto (min)</label>
            <input
              type="number"
              min={0}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value || "0"))}
              className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#6CC4A1]"
            />
          </Card>
        )}

        {/* Mieliala */}
        {showMood && (
          <Card>
            <label className="mb-2 block text-sm font-medium text-white/90">Mieliala</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white outline-none focus:ring-2 focus:ring-[#6CC4A1]"
            >
              <option>Erinomainen</option>
              <option>Hyvä</option>
              <option>Neutraali</option>
              <option>Väsynyt</option>
              <option>Stressaantunut</option>
            </select>
          </Card>
        )}

        {/* Tallenna */}
        <Button
          onClick={() =>
            onSave?.({
              type,
              minutes: showMinutes ? minutes : undefined,
              mood: showMood ? mood : undefined,
              date: new Date().toDateString(),
            })
          }
          className="bg-[#4A90E2] mt-2"
        >
          Tallenna
        </Button>
      </div>
    </div>
  );
}
