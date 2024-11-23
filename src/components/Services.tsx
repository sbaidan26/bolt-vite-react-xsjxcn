import { BookOpen, Users, Trophy, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Formation Continue',
      description: 'Des programmes adaptés aux besoins actuels du marché',
      icon: BookOpen,
    },
    {
      title: 'Coaching Professionnel',
      description: 'Accompagnement personnalisé pour votre développement',
      icon: Users,
    },
    {
      title: 'Certification',
      description: 'Validez vos compétences avec des certifications reconnues',
      icon: Trophy,
    },
    {
      title: 'Sur Mesure',
      description: 'Des solutions adaptées à vos objectifs spécifiques',
      icon: Target,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une approche complète pour votre développement professionnel
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#003366] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-[#003366] text-white ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href="#" className="focus:outline-none">
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}