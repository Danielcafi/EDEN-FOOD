'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { MenuItem } from '@/data/menu'

interface CartItem extends MenuItem {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('edenfood-cart')
      if (savedCart) {
        try {
          setItems(JSON.parse(savedCart))
        } catch (e) {
          console.error('Error loading cart from localStorage', e)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (items.length > 0) {
        localStorage.setItem('edenfood-cart', JSON.stringify(items))
      } else {
        localStorage.removeItem('edenfood-cart')
      }
    }
  }, [items])

  const addToCart = (item: MenuItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const getTotalPrice = () => {
    return items.reduce((sum, item) => {
      const price = 5000
      return sum + price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
