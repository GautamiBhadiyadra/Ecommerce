import React from 'react'

const RadHeart = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <g filter="url(#filter0_d_96_2)">
                <circle cx="50" cy="46" r="20" fill="white" />
                <path d="M59.2913 38.6118C58.7805 38.1008 58.1741 37.6955 57.5066 37.4189C56.8392 37.1423 56.1238 37 55.4013 37C54.6788 37 53.9634 37.1423 53.2959 37.4189C52.6285 37.6955 52.022 38.1008 51.5113 38.6118L50.4513 39.6718L49.3913 38.6118C48.3596 37.5801 46.9603 37.0005 45.5013 37.0005C44.0423 37.0005 42.643 37.5801 41.6113 38.6118C40.5796 39.6435 40 41.0428 40 42.5018C40 43.9609 40.5796 45.3601 41.6113 46.3918L42.6713 47.4518L50.4513 55.2318L58.2313 47.4518L59.2913 46.3918C59.8023 45.8811 60.2076 45.2746 60.4842 44.6072C60.7608 43.9397 60.9031 43.2243 60.9031 42.5018C60.9031 41.7793 60.7608 41.0639 60.4842 40.3965C60.2076 39.729 59.8023 39.1226 59.2913 38.6118Z" fill="#FF4242" />
            </g>
            <defs>
                <filter id="filter0_d_96_2" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_96_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_96_2" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default RadHeart