import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 w-full h-full hero-image-container">
          <div className="absolute inset-0 bg-gray-800"></div>
          <Image
            src="/edenfood-profile.jpg"
            alt="EDEN FOOD - Restaurant à Cotonou"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 20%' }}
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              EDEN FOOD
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 leading-relaxed drop-shadow-md px-2">
              Votre restaurant préféré pour vous délecter de délicieux petits déjeuners et mets africains
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 drop-shadow-md">
              À Cotonou, Bénin
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-10 md:mb-12 drop-shadow-md font-medium">
              Originalité 😍, Exclusivité 🥳, Élégance 🥺
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link href="/menu" className="w-full sm:w-auto btn-primary bg-white text-primary-600 hover:bg-gray-100 border-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                Découvrir le menu
                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200 text-sm sm:text-base rounded-md">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Une expérience culinaire authentique
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les saveurs authentiques du Bénin et de l'Afrique de l'Ouest dans un cadre chaleureux et accueillant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/petits-dejeuners.webp"
                  alt="Petits déjeuners"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Petits déjeuners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Commencez votre journée avec nos délicieux petits déjeuners béninois et continentaux.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/cuisine-traditionnelle.webp"
                  alt="Cuisine traditionnelle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cuisine traditionnelle</h3>
                <p className="text-gray-600 leading-relaxed">
                  Plats authentiques préparés avec des ingrédients frais et des recettes traditionnelles.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/service-traiteur.webp"
                  alt="Service traiteur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service traiteur</h3>
                <p className="text-gray-600 leading-relaxed">
                  Organisez vos événements avec nos formules traiteur sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prêt à découvrir nos saveurs ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explorez notre menu varié et laissez-vous séduire par nos spécialités.
            </p>
            <Link href="/menu" className="btn-primary">
              Voir le menu complet
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
