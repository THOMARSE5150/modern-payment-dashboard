import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className="dark font-sans bg-primary min-h-screen">
      <Component {...pageProps} />
    </main>
  )
}