'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
  { href: '/', label: 'Home' },
  { href: '/trail', label: 'Trail' },
  { href: '/live', label: 'Live', isLive: true },
  { href: '/hall-of-fame', label: 'Hall of Fame' },
  { href: '/about', label: 'O Mnie' },
]

  const socialLinks = [
    { 
      href: 'https://mapy.com/s/barusofola', 
      label: 'Mapa', 
      external: true,
      icon: (
        <svg 
          className="w-5 h-5 transition-all duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-label="Mapa"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
          />
        </svg>
      )
    },
    { 
      href: 'https://www.facebook.com/SudetyGrandTrail', 
      label: 'Facebook', 
      external: true,
      icon: (
        <svg 
          className="w-5 h-5 transition-all duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-label="Facebook"
        >
          <path 
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      )
    },
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-forest-800/95 backdrop-blur-sm border-b border-forest-600"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-vintage bg-transparent">
              <Image
                src="/images/logo.png"
                alt="Sudety Grand Trail Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-display font-bold text-lg text-cream hidden sm:block">
              Grand Trail Sudety
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors duration-200 ${
                  pathname === item.href 
                    ? 'text-accent' 
                    : 'text-cream/90 hover:text-cream'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {item.isLive && (
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </div>
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-forest-600">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-accent transition-all duration-300 p-2 rounded-lg hover:bg-forest-700/50 transform hover:scale-110"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-cream hover:text-accent hover:bg-forest-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-forest-600 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    pathname === item.href 
                      ? 'text-accent' 
                      : 'text-cream/90 hover:text-cream'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex space-x-4 pt-4 border-t border-forest-600">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-accent transition-all duration-300 p-2 rounded-lg hover:bg-forest-700/50 transform hover:scale-110"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation