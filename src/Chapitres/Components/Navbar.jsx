// J'importe mon logo
import logo from '../../assets/imgs/logo.png'

const Navbar = () => {
    const logoWidth = {width: '3%'};
    const logoRadius = {borderRadius: '50%'};

    return (
        <>
            <header>
                <nav className="bg-sky-100 text-sky-700 p-3 border-b-2 border-solid border-sky-900">
                    <div className="flex place-content-between items-center">
                        <a href="#" className="ml-2" style={logoWidth}><img src={logo} alt="Logo" style={logoRadius} /></a>
                        <ul className="flex">
                            <li><a href="#" className="p-5">Accueil</a></li>
                            <li><a href="#" className="p-5">Témoignages</a></li>
                            <li><a href="#" className="p-5">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar