// J'importe mon logo
import logo from '../../assets/imgs/logo.png'

const Navbar = () => {
    const logoWidth = { width: '3%' };
    const logoRadius = { borderRadius: '50%' };

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500 text-white">
                <div className="flex place-content-between items-center">
                    <a href="#" className="ml-2" style={logoWidth}><img src={logo} alt="Logo" style={logoRadius} /></a>
                    <ul className="flex">
                        <li><a href="#" className="p-5">Home</a></li>
                        <li><a href="#" className="p-5">Jobs</a></li>
                        <li><a href="#" className="p-5">Add jobs</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar