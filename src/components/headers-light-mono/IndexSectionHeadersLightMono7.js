import React, { useEffect } from 'react';
import { handleSmoothScroll } from '../../utils/utils';
import { initBurgerMenu } from '../../assets/js/main';

export default function IndexSectionHeadersLightMono7() {
    useEffect(() => {
        initBurgerMenu();
    }, []);

    return (
        <React.Fragment>
            <>
            <section>
                <nav className="relative px-6 py-6 flex justify-between items-center py-6 bg-white">
                    <a className="text-3xl font-bold leading-none" href="#">
                        <img className="h-12 w-auto" src="assets/logo/QW-logo-color.svg" alt="Quantum Workplace Logo" width={300} height={85} />
                    </a>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center p-3 hover:bg-gray-100 rounded">
                            <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        <li><a className="text-gray-900 text-base hover:text-gray-500" href="https://www.quantumworkplace.com/product/employee-engagement-software">Engagement</a></li>
                        <li className="text-gray-300">
                            <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><a className="text-gray-900 text-B hover:text-gray-500" href="https://www.quantumworkplace.com/product/performance-management-software">Performance</a></li>
                    </ul>
                    <a className="hidden lg:inline-block py-2 px-6 bg-orange-600 hover:bg-orange-700 rounded-l-xl rounded-t-xl text-white font-bold text-sm transition duration-200" href="/">Home</a>
                </nav>
                <div className="relative py-20 bg-gray-50 overflow-hidden">
                    <img className="hidden lg:block absolute inset-0 w-full" src="assets/background/lines.svg" alt="Background lines" loading="lazy" />
                    <div className="relative container mx-auto px-4">
                        <div className="flex flex-wrap items-start">
                            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-start">
                                <div className="w-full text-center lg:text-left">
                                    <h1 className="mb-3 text-4xl lg:text-5xl font-bold font-heading leading-tight">
                                        <span>Get&nbsp;insight. Take&nbsp;action. <br className="hidden lg:block" />Boost&nbsp;engagement.
                                        Book&nbsp;your <span className="text-orange-600">personalized&nbsp;demo</span>.</span>
                                    </h1>
                                    <p className="mb-6 text-lg text-gray-600 leading-loose">
                                    Understand and improve your employee experience with our comprehensive <span className="font-semibold">employee survey platform</span>.
                                    </p>
                                    
                                    <div>
                                        {/* <a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Engagement Suite</a> */}
                                        <a 
                                          className="inline-block max-w-md lg:w-auto py-2 px-6 text-orange-600 border border-orange-600 leading-loose bg-white hover:bg-orange-600 hover:text-white rounded-l-xl rounded-t-xl transition duration-200 smooth-scroll" 
                                          href="#engagement-suite"
                                          onClick={handleSmoothScroll}
                                        >
                                          Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-sm text-center mx-auto">
                                    <div className="mb-4 px-6 py-8 bg-white rounded-xl">
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold text-orange-600">SCHEDULE YOUR DEMO</h2>
                                            <div className="text-center">
                                                <p className="text-gray-600 p-4">Our sales team will contact you to schedule a personalized demo.</p>
                                            </div>
                                        </div>
                                        <form onSubmit={(e) => e.preventDefault()} id="schedule-demo-form">
                                            <div className="flex flex-wrap -mx-2">
                                                <div className="mb-4 w-full lg:w-1/2 px-2">
                                                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name" />
                                                </div>
                                                <div className="mb-4 w-full lg:w-1/2 px-2">
                                                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                                <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" />
                                                <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                            <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                                <input className="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="company Name" />
                                            </div>


                                            <div className="text-center">
                                                <button className="mb-2 w-full py-4 bg-orange-600 hover:bg-orange-700 rounded font-bold text-gray-50 transition duration-200">Request a Demo</button>

                                                <p className="text-gray-600">If you're a customer looking for support, <a className="underline hover:text-orange-600 hover:no-underline" href="mailto:support@quantumworkplace.com">contact support here</a>.</p>

                                            </div>
                                        </form>
                                    </div>
                                    <p className="text-xs text-gray-500"><a className="underline text-orange-600 hover:text-orange-700" href="#">Privacy Policy</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                    <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                <img className="h-10 w-auto" src="assets/logo/QW-logo-color.svg" alt="Quantum Workplace Logo" width="300" height="85" />
                            </a>
                            <button className="navbar-close">
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-600 rounded" href="https://www.quantumworkplace.com/product/employee-engagement-software">Engagement</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-600 rounded" href="https://www.quantumworkplace.com/product/performance-management-software">Performance</a></li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-600 hover:bg-orange-700 rounded-l-xl rounded-t-xl" href="#">Demo Request</a>
                            </div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>© 2024 All rights reserved.</span>
                            </p>


                        </div>
                    </nav>
                </div>
            </section>
            </>
        </React.Fragment>
    );
}