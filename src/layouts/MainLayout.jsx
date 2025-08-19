import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
        {/* Outlet sert de placeholder, il va déterminer quels composants enfants doivent être affichés dans le composant parent,
            exemple : Pour l'instant mon composant HomePage n'affiche que le composant Hero car il est le seul a avoir été déclaré
            après avoir été importé, si je déclare le composant HomeCards, Outlet affichera celui-ci dans le navigateur.
        */}
        <Outlet />
    </>
  )
}

export default MainLayout