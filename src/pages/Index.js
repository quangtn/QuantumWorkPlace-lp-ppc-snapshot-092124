import React, { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersLightMono7 from '../components/headers-light-mono/IndexSectionHeadersLightMono7';
import IndexSectionFeaturesLightMono8 from '../components/features-light-mono/IndexSectionFeaturesLightMono8';
import IndexSectionCallToActionDarkMono11 from '../components/call-to-action-dark-mono/IndexSectionCallToActionDarkMono11';
import IndexSectionCallToActionLightMono18 from '../components/call-to-action-light-mono/IndexSectionCallToActionLightMono18';
// import IndexSectionFeaturesLightMono16 from '../components/features-light-mono/IndexSectionFeaturesLightMono16';
import IndexSectionHeadersDarkMono19 from '../components/headers-dark-mono/IndexSectionHeadersDarkMono19';
import IndexSectionFooterLightColor13 from '../components/footer-light-color/IndexSectionFooterLightColor13';

// Lazy load the component
const IndexSectionLogoCloudsLightColor9 = lazy(() => import('../components/logo-clouds-light-color/IndexSectionLogoCloudsLightColor9'));

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersLightMono7 />
      <IndexSectionCallToActionDarkMono11 />
      <IndexSectionCallToActionLightMono18 />
      <Suspense fallback={<div>Loading Our Customers Logo ...</div>}>
        <IndexSectionLogoCloudsLightColor9 />
      </Suspense>
      <IndexSectionFeaturesLightMono8 />
      <IndexSectionHeadersDarkMono19 />
      <IndexSectionFooterLightColor13 />
    </React.Fragment>
  );
}
