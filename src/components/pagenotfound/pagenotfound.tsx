import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-cente px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Page Not Found
                    </h1>
                    <Link to='/' className='mt-5'>
                        <button type='button' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back to Homepage</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Pagenotfound