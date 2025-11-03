import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/20 to-white" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <p className="uppercase tracking-widest text-sm text-teal-200/90">Medical Doctor • Researcher • Public Health Advocate</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
            Empowering Communities Through Healthcare and Education
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg">
            Dr. Fatuma Ayan Aden is a distinguished healthcare leader and academic professional dedicated to improving public health outcomes and advancing equitable care.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              View My Work
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
