import './Rodape.css'

function Rodape() {
    return(
        <footer className='rodape'>

            <div className='redes'>
                <a href='https://www.facebook.com/' target='blank'><img src='imagens/fb.png' alt='facebook'/></a>
                <a href='https://www.x.com/' target='blank'><img src='imagens/tw.png' alt='twitter'/></a> 
                <a href='https://www.instagram.com/' target='blank'><img src='imagens/ig.png' alt='instagram'/></a> 
            </div>

            <div className='logo'>
                <img src='imagens/logo.png' alt='logo'/>
            </div>

            <div className='texto'>
                <p>Desenvolvido por Augusto Koch.</p>
            </div>
        </footer>
    )
}

export default Rodape