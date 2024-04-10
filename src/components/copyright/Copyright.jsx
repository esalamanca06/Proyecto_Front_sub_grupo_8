import React, { useState } from 'react'
import './Copyright.css'

export const Copyright = () => {

    const [dateFooter, setDateFooter] = useState(2023)
    const getDateFooter = () => {
        const year = document.getElementById("year");
        const yearCopy = year.textContent = new Date().getFullYear();
        setDateFooter(yearCopy)
    }

    window.addEventListener("load", (event) => {
        getDateFooter();
    });

    return (
        <>
            {/* COPYRIGHT */}
            <div className="copyright">
                    <p className="footerText"><span id="year">{dateFooter}</span> Todos los derechos reservados &#169;  2024 Copyright </p>
            </div>
        </>
    )
}
