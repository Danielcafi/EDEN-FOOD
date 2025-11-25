import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

