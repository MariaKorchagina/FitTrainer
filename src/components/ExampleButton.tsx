export function ExampleButton({ label = 'Click me' }: { label?: string }) {
  return <button className="rounded-md border px-3 py-2">{label}</button>
}
