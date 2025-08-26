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
    { href: 'https://mapy.com/s/barusofola', label: 'Mapa', external: true },
    { href: 'https://www.facebook.com/SudetyGrandTrail', label: 'Facebook', external: true },
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
            
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-forest-600">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {link.label}
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
                    className="text-cream/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
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