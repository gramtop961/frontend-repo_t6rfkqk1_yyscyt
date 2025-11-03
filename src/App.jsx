import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen font-inter bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Sections />
      <ContactFooter />
    </div>
  );
}

export default App;
