import Header from '@/components/Header'
import React, { Suspense } from 'react'
import SelectHouseContent from './SelectHousePageTermas'

export default function page() {
  return (
    <Suspense fallback={<div>
        Cargando propiedad...
    </div>}>
        <Header/>
        <SelectHouseContent/>
    </Suspense>
  )
}
