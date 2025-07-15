import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PaymentForm from '../components/PaymentForm'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if all required environment variables are set
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      'NEXT_PUBLIC_AUTHOR',
      'NEXT_PUBLIC_BUILD_TIME'
    ]

    const missingEnvVars = requiredEnvVars.filter(
      varName => !process.env[varName]
    )

    if (missingEnvVars.length > 0) {
      setError(`Missing environment variables: ${missingEnvVars.join(', ')}`)
    }

    setIsLoading(false)
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Modern Payment Dashboard
        </h1>
        <PaymentForm />
      </main>
      <footer className="text-center py-4 text-sm text-gray-600">
        Built by {process.env.NEXT_PUBLIC_AUTHOR} at {process.env.NEXT_PUBLIC_BUILD_TIME}
      </footer>
    </div>
  )
}