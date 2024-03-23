import React from 'react'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Copyright } from './components/copyright/Copyright'
import { Whatsapp } from './components/btnWhatsapp/Whatsapp'
import { MoreInfo } from './components/moreInfo/MoreInfo'

export const More = () => {
    return (
        <>
            <Navbar />
            <MoreInfo />
            <Footer />
            <Copyright />
            <Whatsapp />
        </>
    )
}
