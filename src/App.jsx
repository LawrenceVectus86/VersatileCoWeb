import { useState } from 'react'
import modelTas from '../src/assets/1.webp'
import logo from '../src/assets/logo1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <header className="flex flex-col md:flex-row justify-between items-center p-4 border-b">
                        <div className="flex items-center mb-4 md:mb-0">
                            <i className="fas fa-search text-red-500"></i>
                            <input type="text" placeholder="Search..." className="ml-2 border-b border-red-500 outline-none" />
                        </div>
                        <h1 className="text-2xl font-bold mb-4 md:mb-0">
                            <img src={logo} alt="Logo Brand" className='w-50 h-50' />
                        </h1>
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <a href="#" className="text-red-500">Shop All</a>
                            <a href="#" className="text-gray-700">Our Story</a>
                            <a href="#" className="text-gray-700">Our Craft</a>
                            <a href="#" className="text-gray-700">Contact</a>
                        </div>
                        <div className="flex space-x-4">
                            <i className="fab fa-whatsapp text-gray-700"></i>
                            <i className="fab fa-facebook text-gray-700"></i>
                            <i className="fab fa-instagram text-gray-700"></i>
                            <i className="fab fa-tiktok text-gray-700"></i>
                        </div>
                    </header>
                    <main className="relative">
                        <img src={modelTas} alt="Woman holding a beige handbag" className="w-full h-auto" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold text-center">Embrace Elegance</div>
                        <div className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 space-y-4">
                            <button className="flex items-center space-x-2 border p-2 bg-white text-gray-700 w-full md:w-auto">
                                <span>Shop The Shopee Mall</span>
                                <i className="fas fa-shopping-bag"></i>
                            </button>
                            <button className="flex items-center space-x-2 border p-2 bg-white text-gray-700 w-full md:w-auto">
                                <span>Shop The Lazada</span>
                                <i className="fas fa-heart"></i>
                            </button>
                            <button className="flex items-center space-x-2 border p-2 bg-white text-gray-700 w-full md:w-auto">
                                <span>Shop The Tiktok Mall</span>
                                <i className="fab fa-tiktok"></i>
                            </button>
                            <button className="flex items-center space-x-2 border p-2 bg-white text-gray-700 w-full md:w-auto">
                                <span>Shop The Tokopedia</span>
                                <i className="fas fa-store"></i>
                            </button>
                        </div>
                    </main>
                </div>
            );
        };

export default App
