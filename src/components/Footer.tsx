import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Formacomm</span>
            </div>
            <p className="mt-4 text-gray-300">
              Votre partenaire de confiance pour la formation professionnelle en Suisse.
              Développez vos compétences et atteignez vos objectifs avec notre expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Formation Continue</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Certification</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Sur Mesure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Liens Utiles</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">À propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Conditions générales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Formacomm. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}