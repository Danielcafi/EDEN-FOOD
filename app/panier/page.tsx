'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { TrashIcon, PlusIcon, MinusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryTime: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    const orderDetails = {
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
      })),
      total: getTotalPrice(),
      customer: formData,
      timestamp: new Date().toISOString(),
    }

    console.log('Order submitted:', orderDetails)

    setTimeout(() => {
      setSubmitted(false)
      clearCart()
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        deliveryTime: '',
        notes: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Votre panier</h1>
            <p className="text-xl text-gray-600 mb-8">
              Votre panier est vide. Découvrez nos délicieux plats !
            </p>
            <Link href="/menu" className="btn-primary inline-flex items-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Voir le menu
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commande confirmée !</h2>
              <p className="text-lg text-gray-600 mb-6">
                Merci pour votre commande. Nous avons bien reçu votre demande et vous contacterons dans les plus brefs délais pour confirmer les détails.
              </p>
              <Link href="/menu" className="btn-primary">
                Retour au menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <Link href="/menu" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Retour au menu
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Votre panier</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4"
                >
                  {item.image && (
                    <div className="relative w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 96px"
                        quality={70}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Supprimer"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 text-gray-900 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {formatPrice(5000 * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Vider le panier
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Récapitulatif</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-gray-900 font-medium">
                      {formatPrice(5000 * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse de livraison *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Heure de livraison souhaitée
                  </label>
                  <select
                    id="deliveryTime"
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="">Sélectionner une heure</option>
                    <option value="asap">Le plus tôt possible</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Notes spéciales (optionnel)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                    placeholder="Allergies, instructions spéciales, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold"
                >
                  Confirmer la commande
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Champs obligatoires. Nous vous contacterons pour confirmer votre commande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
