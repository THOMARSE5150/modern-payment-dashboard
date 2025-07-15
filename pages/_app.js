import '../styles/globals.css'
import { Suspense } from 'react'

function Loading() {
  return <div>Loading...</div>
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...pageProps} />
    </Suspense>
  )
}

// Add build metadata
if (typeof window !== 'undefined') {
  console.log('Build Time:', process.env.NEXT_PUBLIC_BUILD_TIME)
  console.log('Author:', process.env.NEXT_PUBLIC_AUTHOR)
}