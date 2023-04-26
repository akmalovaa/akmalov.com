import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
  return (
    <div className="prose prose-sm min-w-full bg-bg sm:prose">
      <Header />
      <main className="mx-auto min-h-screen max-w-2xl px-2 sm:px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
