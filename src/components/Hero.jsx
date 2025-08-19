// La meilleure pratique est de déclarer les props en tant qu'argument de la fonction (destructuration), cela rend le code plus lisible.
const Hero = ({title = 'Become a React Dev', subtitle='Find the React job that fits your skill set'}) => {

    return (
        <section className='bg-indigo-700 text-white py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    {/* Je récupère la prop désirée en déclarant le mot props suivi du nom de la prop */}
                    {/* <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl'>{ props.title }</h1>
                    <p className='my-4 text-xl'>{ props.subtitle }</p> */}
                    <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl'>{ title }</h1>
                    <p className='my-4 text-xl'>{ subtitle }</p>
                </div>
            </div>
        </section>
    )
}

export default Hero