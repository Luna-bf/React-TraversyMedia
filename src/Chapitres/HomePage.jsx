import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import HomeCards from "./Components/HomeCards.jsx"

const HomePage = () => {
    return (
        <>
            {/* J'importe le composant Navbar dans le fichier HomePage */}
            <Navbar />

            {/* 
                Les props fonctionnent comme les attributs HTML, sauf que je peux aussi passer des données JS, comme des
                objets ou des fonctions (voir HomePage.jsx)
            */}
            {/* Je déclare une prop nommée title prenant une valeur de type string */}
            {/* <Hero title="Become a React Dev" subtitle="Find the React job that fits your skill set" /> */}
            <Hero />

            {/* Wrapper components */}
            <HomeCards />
        </>
    )
}

export default HomePage