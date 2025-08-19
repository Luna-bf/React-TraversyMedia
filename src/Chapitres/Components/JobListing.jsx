// J'importe le hook 'useState' depuis React
import { useState } from "react"
import jobs from '../../jobs.json'
import { FaLocationDot } from "react-icons/fa6";

const JobListing = ({ job }) => { /* Je passe l'élément job en tant que paramètre à JobListing */

    /* Ce useState va servir à montrer les autres cartes en dessous des trois premières, le booléen placé entre les parenthèses
       correspond à l'état initial, soit la valeur par défaut de useState. Cette valeur est initialisée à 'false' car je ne veux
       pas montrer les autres cartes avant d'avoir cliqué sur le bouton "Read more".*/

    /* useState renvoie un tableau contenant deux valeurs: l'état courant, ici représenté par "showAllJobs" et la fonction de 
       mise à jour, représentée par "setShowAllJobs". La fonction de mise à jour permet de modifier la valeur de l'état courant
       (showAllJobs) lors d'une interaction précise, par exemple: cliquer sur un bouton.
    */
    // Sources : Traversy Media et la documentation React

    const [showFullDesc, setShowFullDesc] = useState(false);
    let description = job.description; // Variable qui va contenir la description

    if (!showFullDesc) { // Si showFullDesc est égale à false...

        // Je coupe la string de la variable description en ne laissant que 90 caractères, puis je lui ajoute '...' pour le style
        description = description.substring(0, 90) + '...';
    } else {

        // Sinon (si showFullDesc est égale à true), je lui assigne la description de l'élément job
        description = job.description;
    }

    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        {/* Je vais chercher les données en déclarant le paramètre job (élément parcouru lors du tour de boucle)
                                suivi d'un point puis de la clé de l'élément désiré, ici j'affiche la valeur de la clé 'type' */}
                        <div className="text-gray-600 my-2">{job.type}</div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                    </div>

                    {/* Je remplace "job.description" par "description", soit la variable déclarée plus haut */}
                    <div className="mb-5">{description}</div>

                    {/* J'utilise une expression ternaire (équivalent de if-else) pour le bouton : Si showFullDesc est égal à true,
                        le texte du bouton sera "Less", sinon ce sera "More" */}
                    {/* Le bouton contient aussi une méthode onClick() qui déclenche une fonction fléchée qui appelle la fonction
                        setShowFullDesc qui prend previousState (l'ancienne valeur de showFullDesc) et l'inverse (toggle)
                    */}
                    <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={() => setShowFullDesc((previousState) => !previousState)}>{showFullDesc ? "Less" : "More"}</button>

                    <h3 className="text-gray-800 mb-2">{job.salary} / Year</h3>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            <FaLocationDot className="inline text-lg mb-1 mr-1" />
                            {job.location}
                        </div>

                        {/* J'utilise l'id de l'élément job afin que le lien me renvoie vers une page contenant les infos de la 
                            carte sur laquelle j'ai cliqué, pour le moment cela ajoute un chiffre dans le lien de la page */}

                        {/* Je met bien un / avant car je veux que mon lien commence à partir de 'jobs', sinon le lien donnera
                            "localhost/jobs/jobs/job.id" */}
                        <a href={`/jobs/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobListing