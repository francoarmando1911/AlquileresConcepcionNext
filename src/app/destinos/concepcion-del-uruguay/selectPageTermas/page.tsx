import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import PropertiesTermas from './SelectHousePageTermas'

export default function page() {
  return (
      <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
              <PropertiesTermas />
          </main>
          <Footer />
      </div>
  )
}