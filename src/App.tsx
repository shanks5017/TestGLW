import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
// Pages - Code Splitting
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Pricing = React.lazy(() => import('./pages/Pricing').then(module => ({ default: module.Pricing })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Blog = React.lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Product = React.lazy(() => import('./pages/Product').then(module => ({ default: module.Product })));
const Support = React.lazy(() => import('./pages/Support').then(module => ({ default: module.Support })));
const Resources = React.lazy(() => import('./pages/Resources').then(module => ({ default: module.Resources })));
const Waitlist = React.lazy(() => import('./pages/Waitlist').then(module => ({ default: module.Waitlist })));
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));

// ScrollToTop component to reset scroll on route change
import { Preloader } from './components/ui/Preloader';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { SuspenseLoader } from './components/ui/SuspenseLoader';

import { useLenis } from 'lenis/react';

function ScrollToTopWrapper() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    // On first load (refresh), let browser restore scroll position implicitly. 
    // Do not force scroll to top.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // On subsequent navigations, force instant scroll to top
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback if lenis isn't ready
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollProgress />
        <Preloader />
        <ScrollToTopWrapper />
        <React.Suspense fallback={<SuspenseLoader />}>
          <Routes>
            {/* Public routes with layout */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/product" element={<Layout><Product /></Layout>} />
            <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/support" element={<Layout><Support /></Layout>} />
            <Route path="/resources" element={<Layout><Resources /></Layout>} />
            <Route path="/waitlist" element={<Layout><Waitlist /></Layout>} />

            {/* Dashboard Route - Standalone */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </React.Suspense>
      </SmoothScroll>
    </Router>
  );
}

export default App;