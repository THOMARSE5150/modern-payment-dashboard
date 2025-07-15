import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query
  const [paymentInfo, setPaymentInfo] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!session_id) return

    async function fetchPaymentInfo() {
      try {
        const response = await fetch('/api/payment-success', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ session_id }),
        })

        if (!response.ok) {
          throw new Error('Payment verification failed')
        }

        const data = await response.json()
        setPaymentInfo(data)
      } catch (err) {
        setError(err.message)
        console.error('Payment verification error:', err)
      }
    }

    fetchPaymentInfo()
  }, [session_id])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center text-green-600 mb-4">
            Payment Successful!
          </h1>
          
          {error ? (
            <div className="text-red-600 text-center">
              Error: {error}
            </div>
          ) : !paymentInfo ? (
            <div className="text-center">
              Verifying payment...
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700">
                Thank you for your payment. Your transaction has been completed successfully.
              </p>
              <div className="text-sm text-gray-600">
                Session ID: {session_id}
              </div>
            </div>
          )}

          <button
            onClick={() => router.push('/')}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
          >
            Return to Dashboard
          </button>
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-gray-600">
        Built by {process.env.NEXT_PUBLIC_AUTHOR} at {process.env.NEXT_PUBLIC_BUILD_TIME}
      </footer>
    </div>
  )
}