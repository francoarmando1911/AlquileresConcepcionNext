import { Suspense } from 'react';
import SelectHouseContent from './SelectHouseContent';
import Header from '@/components/Header';


export default function Page() {
    return (
        <Suspense fallback={<div>Cargando propiedad...</div>}>
            <Header/>
            <SelectHouseContent />
        </Suspense>
    );
}
