import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Suspense } from 'react'
import InterestConcepcion from './InterestConcepcion'

export default function page() {
  return (
    <Suspense fallback={<div>
        Cargando pagina...
    </div>}>
        <Header/>
        <InterestConcepcion/>
        <Footer/>
    </Suspense>
  )
}
