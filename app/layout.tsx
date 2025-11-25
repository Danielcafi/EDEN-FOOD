import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: 'EDEN FOOD - Restaurant à Cotonou | Petits déjeuners et mets africains',
  description: 'EDEN FOOD votre restaurant préféré pour vous délecter de délicieux petits déjeuners et mets africains à Cotonou, Bénin.',
  keywords: 'restaurant Cotonou, cuisine africaine, petits déjeuners Bénin, EDEN FOOD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
