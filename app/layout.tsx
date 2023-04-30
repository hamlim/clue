import { Heading, Link } from '@ds-pack/daisyui'
import { Provider } from '@lib/State'
import type { Metadata } from 'next'
import '@styles/globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en-US" data-theme="corporate" className="min-h-screen">
      <body className="min-h-screen">
        <main className="min-h-screen flex flex-col">
          <header className="shrink bg-[rgba(1,50,32,.3)] text-center p-4">
            <Heading is="h1" variant="h1">
              📝 Clue Notes
            </Heading>
          </header>
          <section className="grow py-4">
            <Provider>{children}</Provider>
          </section>
          <footer className="shrink bg-[rgba(1,50,32,.3)] p-4 text-center">
            Created by <Link href="https://matthamlin.me">Matt Hamlin</Link> ©️{' '}
            {new Date().getFullYear()}
          </footer>
        </main>
      </body>
    </html>
  )
}

// @ts-ignore
export let metadata: Metadata = {
  title: `📝 Clue Notes`,
}
