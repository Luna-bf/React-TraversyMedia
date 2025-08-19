// J'importe le fichier json
import jobs from '../jobs.json';
import JobListing from './JobListing';

const JobListings = () => {
  // console.log(jobs);
  // J'utilise la méthode slice() afin de récupérer les 3 premiers éléments de jobs, soit les éléments les plus récents
  const recentJobs = jobs.slice(0, 3);

  return (
    <>
      <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>Browse jobs</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            {/* J'utilise la méthode map pour parcourir l'objet jobs, la méthode prend un paramètre 'job' (élément parcouru lors du tour de boucle) */}
            {recentJobs.map((job) => (

              // Revoir l'utilisation des props
              // Je passe l'id à JobListing (qui sera le container/carte pour chaque élément de jobs) afin d'éviter d'avoir des erreurs
              <JobListing key={job.id} job={job} /> /* Puis je donne la prop au composant JobListing */
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default JobListings