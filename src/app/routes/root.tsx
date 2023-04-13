import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from '@app/components';
import { Outlet, RootRoute } from '@tanstack/react-router';

export const rootRoute = new RootRoute({
  component: () => {
    return (
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Outlet />
      </div>
    );
  }
});
