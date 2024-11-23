import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nous sommes là pour répondre à vos questions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Mail className="h-12 w-12 text-[#003366]" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">info@formacomm.ch</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Phone className="h-12 w-12 text-[#003366]" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Téléphone</h3>
            <p className="mt-2 text-base text-gray-500">+41 XX XXX XX XX</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <MapPin className="h-12 w-12 text-[#003366]" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Adresse</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Rue de Example 123<br />
              1234 Genève, Suisse
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <form className="p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366]"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring-[#003366]"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#003366] hover:bg-[#004488] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003366]"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}