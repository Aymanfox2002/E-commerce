import React from 'react'
import SectionHeader from '../Components/SectionHeader'
import Produtcs from '../Components/Products'
import Header from './../Components/Header';


export default function Homepage() {
    return (
        <div>
            <header className='header '>
                <Header />
            </header>
            <SectionHeader />


            <Produtcs />

        </div>
    )
}


