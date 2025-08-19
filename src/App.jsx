// Importation de plusieurs éléments depuis React router dom (package installé)
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
    return <RouterProvider router={router} />;

    // <>
    {/* J'importe le composant Navbar dans le fichier HomePage */ }
    {/* <Navbar /> */ }

    {/* 
                Les props fonctionnent comme les attributs HTML, sauf que je peux aussi passer des données JS, comme des
                objets ou des fonctions (voir HomePage.jsx)
            */}
    {/* Je déclare une prop nommée title prenant une valeur de type string */ }
    {/* <Hero title="Become a React Dev" subtitle="Find the React job that fits your skill set" /> */ }
    {/* <Hero /> */ }

    {/* Wrapper components */ }
    {/* <HomeCards />

            <JobListings />
            <ViewAllJobs /> */}
    // </>
}

export default App;