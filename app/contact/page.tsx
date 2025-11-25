'use client'

import React, { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations de contact</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">Cotonou, Bénin</p>
                </div>
              </div>

              <div className="flex items-start">
                <EnvelopeIcon className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Réseaux sociaux</h3>
                  <a
                    href="https://share.google/Aw55VpSrnFM7sDN9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Visitez notre page Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h3>
              <p className="text-gray-600 mb-2">
                Pour connaître nos horaires d'ouverture et de service, veuillez nous contacter directement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-medium">
                  Merci ! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
