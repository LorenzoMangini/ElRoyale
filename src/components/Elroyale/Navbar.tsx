import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { t } from '@/i18n'
import { images } from '@/data/images'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  {
    label: 'nav.about' as const,
    children: [
      { label: 'nav.about.ourStory' as const, to: '/our-story' },
      { label: 'nav.about.ourChefs' as const, to: '/our-chefs' },
      { label: 'nav.about.ourGuestbook' as const, to: '/guestbook' },
      { label: 'nav.about.contactUs' as const, to: '/contacts' },
      { label: 'nav.about.events' as const, to: '/events' },
      { label: 'nav.about.faqs' as const, to: '/faqs' },
    ],
  },
  {
    label: 'nav.menu' as const,
    children: [
      { label: 'nav.menu.classic' as const, to: '/menu-classic' },
      { label: 'nav.menu.mixed' as const, to: '/menu-mixed' },
      { label: 'nav.menu.board' as const, to: '/menu-board' },
      { label: 'nav.menu.gallery' as const, to: '/menu-gallery' },
      { label: 'nav.menu.card' as const, to: '/menu-cards' },
    ],
  },
  {
    label: 'nav.gallery' as const,
    children: [
      { label: 'nav.gallery.grid' as const, to: '/gallery' },
      { label: 'nav.gallery.fullwidth' as const, to: '/gallery-fullwidth' },
    ],
  },
  {
    label: 'nav.blog' as const,
    children: [
      { label: 'nav.blog.carousel' as const, to: '/blog-carousel' },
      { label: 'nav.blog.grid' as const, to: '/blog' },
      { label: 'nav.blog.standard' as const, to: '/blog-standard' },
      { label: 'nav.blog.singlePost' as const, to: '/blog/1' },
    ],
  },
  {
    label: 'nav.shop' as const,
    children: [
      { label: 'nav.shop.ourShop' as const, to: '/shop' },
      { label: 'nav.shop.withSidebar' as const, to: '/shop-sidebar' },
      { label: 'nav.shop.singleProduct' as const, to: '/product/1' },
      { label: 'nav.shop.cart' as const, to: '/cart' },
    ],
  },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const location = useLocation()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isFixed = scrollY > 100
  const isHome = location.pathname === '/'

  return (
    <header
      className={cn(
        'w-full z-50 transition-all duration-300',
        isHome && !isFixed ? 'absolute top-0 left-0' : '',
        isFixed
          ? 'fixed top-0 left-0 bg-foreground/95 backdrop-blur-sm shadow-lg'
          : isHome
            ? 'bg-transparent'
            : 'bg-foreground'
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={images.logoLight.url}
            alt={images.logoLight.alt}
            className="h-10 lg:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          <li>
            <Link
              to="/"
              className={cn(
                'px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors',
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-white/80 hover:text-primary'
              )}
            >
              {t('nav.home')}
            </Link>
          </li>
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors',
                  'text-white/80 hover:text-primary'
                )}
              >
                {t(item.label)}
              </button>
              {activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <ul className="bg-white shadow-xl min-w-[200px] py-2">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {t(child.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/reservation"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            {t('nav.reservation')}
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-white p-2"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-foreground border-none p-0 overflow-y-auto">
              <div className="p-6">
                <img
                  src={images.logoLight.url}
                  alt={images.logoLight.alt}
                  className="h-10 mb-6"
                />
                <p className="text-white/60 text-xs leading-relaxed mb-8">
                  {t('hamburgerMenu.description')}
                </p>
                <nav className="space-y-1">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2.5 text-white/80 hover:text-primary text-sm uppercase tracking-wider"
                  >
                    {t('nav.home')}
                  </Link>
                  {navItems.map((item) => (
                    <MobileDropdown
                      key={item.label}
                      item={item}
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <p className="text-white/40 text-xs">
                    {t('hamburgerMenu.mainEmailLabel')}{' '}
                    <span className="text-primary">{t('hamburgerMenu.mainEmail')}</span>
                  </p>
                  <p className="text-white/40 text-xs">
                    {t('hamburgerMenu.phoneLabel')}{' '}
                    <span className="text-white/80">{t('hamburgerMenu.phone')}</span>
                  </p>
                  <Link
                    to="/reservation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block mt-4 px-6 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    {t('hamburgerMenu.makeReservation')}
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

function MobileDropdown({
  item,
  onNavigate,
}: {
  item: (typeof navItems)[0]
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2.5 text-white/80 hover:text-primary text-sm uppercase tracking-wider"
      >
        {t(item.label)}
        <span
          className={cn(
            'transition-transform text-xs',
            open ? 'rotate-180' : ''
          )}
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="pl-4 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={onNavigate}
              className="block py-2 text-white/50 hover:text-primary text-xs uppercase tracking-wider"
            >
              {t(child.label)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
