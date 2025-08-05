'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect } from 'react';

interface Props {
    lat: number;
    lng: number;
}

export default function MapComponent({ lat, lng }: Props) {
    useEffect(() => {
        L.Icon.Default.mergeOptions({
            iconUrl: markerIcon.src,
            iconRetinaUrl: markerIcon2x.src,
            shadowUrl: markerShadow.src,
        });
    }, []);

    return (
        <div className="mt-10 h-96 rounded-lg overflow-hidden">
            <MapContainer center={[lat, lng]} zoom={15} scrollWheelZoom={false} className="h-full w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                    <Popup>Ubicación de la propiedad</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
