// Link permet à l'utilisateur de naviguer sur la page sans que celle-ci ne s'actualise
import { Link } from 'react-router-dom';
// J'importe mon logo
import logo from '../assets/imgs/logo.png';

const Navbar = () => {
    // const logoWidth = { width: '3%' };
    // const logoRadius = { borderRadius: '50%' };

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center md:items-stretch">
                            <Link to="/" className="flex flex-shrink-0 items-center mr-4"><img src={logo} alt="React jobs logo" className="h-10 w-auto" /><span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span></Link>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    {/* Le slash "/" représente la page d'accueil du site (HomePage) */}
                                    <Link to="/" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</Link>
                                    <Link to="/jobs" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</Link>
                                    <Link to="/add-job" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Jobs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar