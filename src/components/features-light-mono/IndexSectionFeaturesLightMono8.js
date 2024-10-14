import React from 'react';
import { handleSmoothScroll } from '../../utils/utils';
import { motion } from 'framer-motion';

export default function IndexSectionFeaturesLightMono8() {
    return (
        <React.Fragment>
            <>
                <section id="engagement-suite" className="text-lg">
  <div className="skew skew-top mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 10 0 10" />
    </svg>
  </div>
  <div className="skew skew-top ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 10 10 0 10 10" />
    </svg>
  </div>
  <div className="py-20 bg-gray-50 radius-for-skewed">
    <div className="container mx-auto px-4 ">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:mb-0 md:mb-0">
          <div className="max-w-md lg:mx-auto">
            <span className="text-orange-600 font-bold">EMPLOYEE ENGAGEMENT SUITE</span>
            <h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading leading-tight">Understand & improve employee experience.
            </h2>
            <p className="mb-6 text-gray-800 leading-loose">Capture employee voice, uncover meaningful insights, and take targeted action to propel your business forward with Quantum Workplace.</p>
            <ul className="text-gray-600">
              <li className="flex mb-4">
                <svg className="mr-2 w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Scientifically validated e9 model</span>
              </li>
              <li className="flex mb-4">
                <svg className="mr-2 w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Research-backed questions</span>
              </li>
              <li className="flex mb-4">
                <svg className="mr-2 w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>6-point agreement scale</span>
              </li>
              <li className="flex mb-4">
                <svg className="mr-2 w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Simple, open-ended questions</span>
              </li>
              <li className="flex mb-4">
                <svg className="mr-2 w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>User-friendly and accessible</span>
              </li>
              <li className="flex mb-4">
                <svg className="mr-2 w-6 h-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI-powered tech</span>
              </li>
            </ul>

            <div><a className="inline-block mx-2 my-4 lg:mb-0 lg:mr-3 lg:w-auto py-2 px-6 leading-loose bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="https://www.quantumworkplace.com/product/employee-engagement-software">More Info</a></div>
          </div>
        </div>
        <div className="hidden w-full lg:w-1/2 lg:flex flex-wrap justify-center lg:justify-start">
          <motion.div 
            className="max-w-md w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.025 }}
            delay={1}
          >
            <img 
              src="https://www.quantumworkplace.com/hs-fs/hubfs/EngagementMain_Lifecycle_Circles.png" 
              alt="Employee Engagement Suite" 
              loading="lazy" 
              className="mx-auto lg:mx-0" 
              width="533"
              height="768"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  <div className="skew skew-bottom mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10" />
    </svg>
  </div>
  <div className="skew skew-bottom ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 10 10" />
    </svg>
  </div>
</section>


            </>
        </React.Fragment>
    );
}
