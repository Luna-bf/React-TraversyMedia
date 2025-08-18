// J'importe mon logo
import favicon from '../../assets/imgs/favicon.png'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="bg-sky-100 text-sky-700 p-3 border-b-2 border-solid border-sky-900">
                    <div className="flex place-content-between items-center">
                        <a href="#" className="ml-2"><img src={favicon} alt="Logo" /></a>
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