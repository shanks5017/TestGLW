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


function ScrollToTopWrapper() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>

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
    </Router>
  );
}

export default App;