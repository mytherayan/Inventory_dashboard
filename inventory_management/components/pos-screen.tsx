'use client'

import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

interface Product {
  title: string
  image: string
  price: number
  item: string
}

interface OrderItem extends Product {
  qty: number
}

const products: Product[] = [
  { title: 'Original Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 499.0, item: '11 item' },
  { title: 'Double Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 912.0, item: '10 item' },
  { title: 'Cheese Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 581.0, item: '7 item' },
  { title: 'Double Cheese Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 1080.0, item: '20 item' },
  { title: 'Spicy Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 613.0, item: '12 item' },
  { title: 'Special Black Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 613.0, item: '39 item' },
  { title: 'Special Cheese Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 664.0, item: '2 item' },
  { title: 'Jumbo Cheese Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 1340.0, item: '2 item' },
  { title: 'Spicy Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 613.0, item: '12 item' },
  { title: 'Special Black Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 613.0, item: '39 item' },
  { title: 'Special Cheese Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 664.0, item: '2 item' },
  { title: 'Jumbo Cheese Burger', image: 'https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg', price: 1340.0, item: '2 item' },
]

const categories = ['All', 'Burger', 'Noodles', 'Drinks', 'Desserts']

export default function POSScreen() {
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'dd/MM/yyyy hh:mm:ss a'))
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [coupon, setCoupon] = useState(0)
  const [total, setTotal] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), 'dd/MM/yyyy hh:mm:ss a'))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    calculateTotal()
  }, [orderItems, discount, coupon])

  const calculateTotal = () => {
    const newSubTotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    const newTax = newSubTotal * 0.1
    const newTotal = newSubTotal + newTax
    const newGrandTotal = newTotal - (discount * (newTotal / 100) + coupon)

    setSubTotal(newSubTotal)
    setTax(newTax)
    setTotal(newTotal)
    setGrandTotal(newGrandTotal)
  }

  const addItemToOrder = (product: Product) => {
    setOrderItems(prevItems => {
      const existingItem = prevItems.find(item => item.title === product.title)
      if (existingItem) {
        return prevItems.map(item =>
          item.title === product.title ? { ...item, qty: item.qty + 1 } : item
        )
      } else {
        return [...prevItems, { ...product, qty: 1 }]
      }
    })
  }

  const TopMenu = () => (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Eggggs Restaurant</h1>
        <p className="text-sm text-gray-600">{currentTime}</p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search menu here..."
          className="pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  )

  const CategoryTabs = () => (
    <div className="flex space-x-4 mb-6 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )

  const ProductGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.title}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          onClick={() => addItemToOrder(product)}
        >
          <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">{product.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-blue-500 font-bold">₹{product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-500">{product.item}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const OrderSummary = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4 mb-6">
        {orderItems.map((item) => (
          <div key={item.title} className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} x {item.qty}</p>
            </div>
            <span className="font-semibold">₹{(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount (%)</span>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            className="w-20 p-1 border rounded"
          />
        </div>
        <div className="flex justify-between items-center">
          <span>Coupon</span>
          <input
            type="number"
            value={coupon}
            onChange={(e) => setCoupon(Number(e.target.value))}
            className="w-20 p-1 border rounded"
          />
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Grand Total</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
        Print Bill
      </button>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-grow p-6">
        <TopMenu />
        <CategoryTabs />
        <ProductGrid />
      </div>
      <div className="w-1/4 bg-gray-200 p-6">
        <OrderSummary />
      </div>
    </div>
  )
}

