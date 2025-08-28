import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import PropertiesCentroConcordia from './selectHousePageCentroConcordia'

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PropertiesCentroConcordia />
      </main>
      <Footer />
    </div>
  )
}