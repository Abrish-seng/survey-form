export function QuantitySelector({ value, onChange }: { value: number; onChange: (next: number) => void }) {
  return (
    <div className="inline-flex items-center rounded-md border border-gray-300">
      <button
        type="button"
        className="px-3 py-1 text-gray-700 hover:bg-gray-100"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        −
      </button>
      <span className="min-w-10 px-3 text-center tabular-nums">{value}</span>
      <button
        type="button"
        className="px-3 py-1 text-gray-700 hover:bg-gray-100"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  )
}