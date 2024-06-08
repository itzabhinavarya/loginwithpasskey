import React from 'react'

const Settings = () => {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 md:h-screen">
                <div className="flex flex-col items-center px-6 py-8 mx-auto  lg:py-0">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Setting
                    </h1>
                </div>
                <div className='px-8'>
                    <button className='p-2 shadow-md text-white bg-blue-700 rounded-lg hover:bg-blue-950 border border-blue-800 flex items-center justify-center'>Generate Passkey</button>
                </div>
            </section>
        </>
    )
}

export default Settings