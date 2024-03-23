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
                <a href="https://jeffersonpulido.netlify.app" target="_blank">
                    <p className="footerText"><span id="year">{dateFooter}</span> Copyright &#169; JPulido Dev</p>
                </a>
            </div>
        </>
    )
}
