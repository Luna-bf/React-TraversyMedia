import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
        {/* Le composant Navbar sera sur toutes les pages (voir App.jsx pour plus de précisions) */}
        <Navbar />
        {/* Outlet sert de remplissage, il va déterminer quels composants enfants doivent être affichés dans le composant parent,
            exemple : Pour l'instant mon composant HomePage n'affiche que le composant Hero car il est le seul a avoir été déclaré
            après avoir été importé, si je déclare le composant HomeCards, Outlet affichera celui-ci dans le navigateur.
        */}
        <Outlet />
    </>
  )
}

export default MainLayout