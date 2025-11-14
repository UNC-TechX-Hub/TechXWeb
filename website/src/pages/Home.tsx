import { useEffect, useId } from 'react'

export default function Home() {
  const titleId = useId()

  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <main aria-labelledby={titleId} className="max-w-4xl mx-auto p-8 leading-relaxed">
      <header className="mb-6">
        <h1 id={titleId} className="text-3xl font-bold mb-2">Home</h1>
        <p className="text-gray-600">Welcome. Replace this boilerplate with your content.</p>
      </header>

      <section className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Add components and styles here.</li>
          <li>Connect data or APIs as needed.</li>
          <li>Update the document title and metadata.</li>
        </ul>
      </section>
    </main>
  )
}