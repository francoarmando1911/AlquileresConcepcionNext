import Header from '@/components/Header'
import React from 'react'
import PropertiesCiervo from './selectHousePageZonaCiervo'
import Footer from '@/components/Footer'

export default function page() {
  return (
      <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
              <PropertiesCiervo />
          </main>
          <Footer />
      </div>
  )
}