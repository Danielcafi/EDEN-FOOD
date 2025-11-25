'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { menuData, MenuCategory } from '@/data/menu'
import { FireIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/contexts/CartContext'

export default function MenuPage() {
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set())
  const { addToCart } = useCart()

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories((prev: Set<string>) => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Notre Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de plats authentiques et savoureux
          </p>
        </div>

        <div className="space-y-8">
          {menuData.map((category: MenuCategory) => (
            <div key={category.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between text-left mb-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
                    collapsedCategories.has(category.id) ? '' : 'rotate-180'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
                  collapsedCategories.has(category.id) ? 'hidden' : 'block'
                }`}
              >
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-16 h-16 text-primary-600 opacity-60 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <p className="text-primary-700 text-xs font-medium opacity-80">{item.name}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 pr-2">{item.name}</h3>
                        {item.spicy && (
                          <FireIcon className="w-5 h-5 text-red-500 flex-shrink-0" aria-label="Épicé" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin d'informations supplémentaires ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour connaître nos prix ou pour des demandes spéciales.
          </p>
          <a href="/contact" className="btn-primary">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  )
}
