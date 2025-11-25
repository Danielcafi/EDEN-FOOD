import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">EDEN FOOD</h3>
            <p className="text-sm leading-relaxed">
              Votre restaurant préféré pour vous délecter de délicieux petits déjeuners et mets africains à Cotonou, Bénin.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Cotonou, Bénin</li>
              <li>
                <a
                  href="https://share.google/Aw55VpSrnFM7sDN9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EDEN FOOD. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
