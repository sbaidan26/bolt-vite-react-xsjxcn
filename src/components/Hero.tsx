import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#003366] pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          alt="Education background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Formation professionnelle<br />
          <span className="text-[#66B2FF]">pour votre succès</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Développez vos compétences avec des formations sur mesure. Notre expertise au service de votre évolution professionnelle.
        </p>
        <div className="mt-10 flex space-x-4">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0055AA] hover:bg-[#004488] transition-colors">
            Nos formations
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-opacity-0 bg-white hover:bg-opacity-10 border-white transition-colors">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}