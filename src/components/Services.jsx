export default function Services() {

    return (

      <section className="py-12 bg-gray-300 text-white">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-wide">Our Services</h1>
        </header>
        <div className="flex flex-wrap justify-center space-x-6">
            <article className="bg-gray-600 rounded-md shadow-md p-8 hover:bg-gray-800 transition duration-500 ease-in-out">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Service One</h2>
                <p className="mb-6 text-gray-300">xyz</p>
                <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition duration-300">Learn More</button>
            </article>
            <article className="bg-gray-600 rounded-md shadow-md p-8 hover:bg-gray-800 transition duration-500 ease-in-out">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Service Two</h2>
                <p className="mb-6 text-gray-300">mno</p>
                <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition duration-300">Learn More</button>
            </article>
            <article className="bg-gray-600 rounded-md shadow-md p-8 hover:bg-gray-800 transition duration-500 ease-in-out">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Service Three</h2>
                <p className="mb-6 text-gray-300">abc</p>
                <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition duration-300">Learn More</button>
            </article>
        </div>
      </section>
    )
}