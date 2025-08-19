// Importation de plusieurs éléments depuis React router dom (package installé)
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        /* Je déclare le composant MainLayout dans un composant Route et je vais ranger touts les autres composants dans celui-ci
           pour que tout les autres composants puissent utiliser le contenu du composant MainLayout.
        */
        <Route path='/' element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route index element={<JobsPage />} />
        </Route >
    )
);

const App = () => {
    return <RouterProvider router={router} />;

    // <>
    {/* J'importe le composant Navbar dans le fichier HomePage */ }
    {/* <Navbar /> */ }

    {/* Les props fonctionnent comme les attributs HTML, sauf que je peux aussi passer des données JS, comme des
        objets ou des fonctions (voir HomePage.jsx)
    */}
    {/* Je déclare une prop nommée title prenant une valeur de type string */ }
    {/* <Hero title="Become a React Dev" subtitle="Find the React job that fits your skill set" /> */ }
    {/* <Hero /> */ }

    {/* Wrapper components */ }
    {/*    <HomeCards />

        <JobListings />
        <ViewAllJobs /> */}
    // </>
}

export default App;