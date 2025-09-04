import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import { Menu } from 'lucide-react'
import './App.css'

function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="text-gray-600">Welcome to the new app with React Router, Tailwind, Radix UI, and Lucide.</p>
      <div className="mt-6 flex items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-gray-50">
              <Menu className="h-4 w-4" />
              Hover me
            </TooltipTrigger>
            <TooltipContent className="rounded-md border bg-white p-2 text-sm shadow">Tooltip content</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Dialog>
          <DialogTrigger className="rounded-md bg-black px-3 py-2 text-white hover:bg-black/90">Open Dialog</DialogTrigger>
          <DialogContent className="rounded-lg border bg-white p-6 shadow-xl">
            <DialogTitle className="text-lg font-semibold">Hello</DialogTitle>
            <DialogDescription className="text-gray-600">This is a Radix Dialog example.</DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      <Accordion type="single" collapsible className="mt-6 divide-y rounded-md border">
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full text-left px-4 py-3">What is this?</AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600">An example using Radix Accordion.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function About() {
  const [count, setCount] = useState(0)
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <button className="rounded-md border px-3 py-2" onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="border-b">
        <div className="mx-auto flex max-w-3xl items-center gap-4 p-4">
          <Link className="text-sm text-gray-700 hover:underline" to="/">Home</Link>
          <Link className="text-sm text-gray-700 hover:underline" to="/about">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
