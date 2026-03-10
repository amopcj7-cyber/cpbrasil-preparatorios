import Hero from './components/Hero';
import CourseCards from './components/CourseCards';
import Testimonials from './components/Testimonials';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <CourseCards />
      <Testimonials />
      <CountdownTimer />
      <Footer />
    </div>
  );
}

export default App;
