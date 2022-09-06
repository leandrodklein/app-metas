import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="App Metas" />
                <h1>App Metas</h1>
                <p>
                    Desenvolvido por
                    <a href="#"> LDK Studios Art</a>
                </p>
            </div>
        </header>
    )
}

export default Header