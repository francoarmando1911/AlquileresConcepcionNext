import Header from '@/components/Header'
import React from 'react'
import ContactPageContent from './ContactPageContent'
import Footer from '@/components/Footer'

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ContactPageContent />
            </main>
            <Footer />
        </div>
    )
}
