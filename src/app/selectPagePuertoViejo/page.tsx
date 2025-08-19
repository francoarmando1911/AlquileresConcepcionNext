import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import PropertiesPuertoViejo from './SelectHousePagePuertoViejo'

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PropertiesPuertoViejo />
      </main>
      <Footer />
    </div>
  )
}