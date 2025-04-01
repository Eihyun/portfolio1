import './Logo.css'

function Logo() {

    return(
        <>
            <div className="container">
                <div className="grid">
                    <div className="col-12 mt-8 logo-container">
                        <iframe
                            width="560" height="315" 
                            src='https://www.youtube.com/embed/F9Ck_rQpj2U?si=4fHwia2ShEwmzbzz'
                            frameborder='0'
                            allow="accelerometer; autoplay;"
                            allowfullscreen
                            title='Logo animation'
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Logo;