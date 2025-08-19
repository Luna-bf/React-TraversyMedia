const JobListing = ({ job }) => { /* Je passe l'élément job en tant que paramètre à JobListing */
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

                        <div className="mb-5">
                            {job.description}
                        </div>

                        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

                        <div className="border border-gray-100 mb-5"></div>

                        <div className="flex flex-col lg:flex-row justify-between mb-4">
                            <div className="text-orange-700 mb-3">{job.location}</div>
                        </div>

                        {/* J'utilise l'id de l'élément job afin que le lien me renvoie vers une page contenant les infos de la 
                            carte sur laquelle j'ai cliqué, pour le moment cela ajoute un chiffre dans le lien de la page */}
                        {/* Je met bien un / avant car je veux que mon lien commence à partir de 'jobs', sinon le lien donnera
                                "localhost/jobs/jobs/job.id" */}
                        <a href={`/jobs/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read more</a>
                    </div>
                </div>
        </>
    )
}

export default JobListing