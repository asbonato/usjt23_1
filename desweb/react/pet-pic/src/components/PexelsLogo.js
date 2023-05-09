import React from 'react'

const PexelsLogo = () => {
    return (
        <div>
        {/** target=_blank abre a página em uma nova aba */}
            <a href='https://www.pexels.com' target='_blank'>
                <img width={75}
                src='https://images.pexels.com/lib/api/pexels.png' />
            </a>
        </div>
    )
}

export default PexelsLogo