import { Suspense } from 'react';
import SelectHouseContent from './SelectHouseContent';

export default function Page() {
    return (
        <Suspense fallback={<div>Cargando propiedad...</div>}>
            <SelectHouseContent />
        </Suspense>
    );
}
