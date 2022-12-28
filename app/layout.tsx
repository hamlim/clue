import { Heading, themeClass, Link } from '@ds-pack/components'
import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'

import { Provider } from '@lib/State'

import { html, body, main, header, content, footer } from '@styles/app/layout'

interface Classes {
  [cls: string]: any
}

function cx(classes: Classes) {
  return Object.entries(classes)
    .filter(([, predicate]) => Boolean(predicate))
    .map(([cls]) => cls)
    .join(' ')
}

export default function Layout({ children }) {
  return (
    <html lang="en-US" className={cx({ [themeClass]: true, [html]: true })}>
      <body className={body}>
        <main className={main}>
          <header className={header}>
            <Heading is="h1" variant="h1">
              📝 Clue Notes
            </Heading>
          </header>
          <section className={content}>
            <Provider>{children}</Provider>
          </section>
          <footer className={footer}>
            Created by <Link href="https://matthamlin.me">Matt Hamlin</Link> ©️{' '}
            {new Date().getFullYear()}
          </footer>
        </main>
      </body>
    </html>
  )
}
