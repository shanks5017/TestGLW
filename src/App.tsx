import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Product } from './pages/Product';
import { Support } from './pages/Support';
import { Resources } from './pages/Resources';
import { Waitlist } from './pages/Waitlist';
import { Dashboard } from './pages/Dashboard';

// ScrollToTop component to reset scroll on route change
import { Preloader } from './components/ui/Preloader';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SmoothScroll } from './components/ui/SmoothScroll';


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
      </SmoothScroll>
    </Router>
  );
}

export default App;