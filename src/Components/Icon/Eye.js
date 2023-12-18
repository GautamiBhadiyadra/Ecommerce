import React from 'react'

const Eye = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <g filter="url(#filter0_d_62_1928)">
                <circle cx="35" cy="31" r="15" fill="white" />
                <path d="M27 31C27 31 30 25 35.25 25C40.5 25 43.5 31 43.5 31C43.5 31 40.5 37 35.25 37C30 37 27 31 27 31Z" stroke="#313131" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35.25 33.25C36.4926 33.25 37.5 32.2426 37.5 31C37.5 29.7574 36.4926 28.75 35.25 28.75C34.0074 28.75 33 29.7574 33 31C33 32.2426 34.0074 33.25 35.25 33.25Z" stroke="#313131" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_62_1928" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_1928" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_1928" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default Eye