import React, { useEffect, useRef, useState } from 'react';

export default function IndexSectionCallToActionDarkMono11() {
    const [isVisible, setIsVisible] = useState(false);
    const iframeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once loaded
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the iframe is visible
        );

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, []);

    return (
        <React.Fragment>
            <>
                <section className="skewed-top-left skewed-bottom-right text-lg">
  <div className="skew skew-top mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 10 0 10" />
    </svg>
  </div>
  <div className="skew skew-top ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 10 10 0 10 10" />
    </svg>
  </div>
  <div className="py-20 bg-gray-900 radius-for-skewed">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <a className="mb-6 inline-block text-white text-3xl font-bold leading-none" href="#">
          <img className="h-12 w-auto" src="assets/logo/QW-logo-nav-white.png" alt="Quantum Workplace Logo" width="300" height="85" loading="lazy" />
        </a>
        <h2 className="mb-4 text-4xl lg:text-5xl text-white font-bold font-heading leading-tight">Build Your Culture of Employee Success. Start Today.</h2>
        <p className="max-w-2xl mx-auto mb-2 text-gray-400 leading-loose">Thousands of customers trust Quantum Workplace to optimize the employee experience, inspire employee impact, and retain their best talent. 
        </p>
        <p className="py-4 text-white">Watch this 3-minute video to find out why.</p>

        <div className="hs-video-widget rounded-3xl overflow-hidden">
            <div className="hs-video-container" style={{ margin: '0 auto' }}>
                <div className="hs-video-wrapper rounded-3xl overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} ref={iframeRef}>
                    {!isVisible && <p className='text-gray-200 text-center text-4xl'>[ video placeholder ]</p>}
                    {isVisible && (
                        <iframe 
                            src="https://play.hubspotvideo.com/v/99128/id/127881272488" 
                            referrerPolicy="origin" 
                            sandbox="allow-forms allow-scripts allow-same-origin allow-popups" 
                            allow="autoplay; fullscreen" 
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                left: 0,
                                top: 0,
                                border: 'none',
                                pointerEvents: 'initial'
                            }}
                            title="HubSpot Video"
                            loading="lazy"
                        />
                    )}
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
  <div className="skew skew-bottom mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10" />
    </svg>
  </div>
  <div className="skew skew-bottom ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 10 10" />
    </svg>
  </div>
</section>


            </>
        </React.Fragment>
    );
}
