import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'

const socialLinks = [
  { name: 'Facebook', icon: 'fb' },
  { name: 'Twitter', icon: 'tw' },
  { name: 'Instagram', icon: 'ig' },
  { name: 'TripAdvisor', icon: 'ta' },
]

const footerLinks = [
  { label: 'footer.links.about' as const, to: '/our-story' },
  { label: 'footer.links.menu' as const, to: '/menu-classic' },
  { label: 'footer.links.gallery' as const, to: '/gallery' },
  { label: 'footer.links.blog' as const, to: '/blog' },
  { label: 'footer.links.shop' as const, to: '/shop' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/60">
      {/* Footer Top */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Address */}
          <div>
            <h5 className="text-white text-lg mb-4">{t('footer.ourAddress')}</h5>
            <p className="text-sm leading-relaxed mb-4">{t('footer.address')}</p>
            <a
              href="#"
              className="inline-flex items-center text-primary text-sm hover:text-primary/80 transition-colors"
            >
              <MapPin className="h-4 w-4 mr-2" />
              {t('footer.viewOnMap')}
            </a>
          </div>

          {/* Center - Logo, Newsletter, Social */}
          <div className="text-center">
            <img
              src={images.footerLogo.url}
              alt={images.footerLogo.alt}
              className="h-14 mx-auto mb-6"
            />
            <p className="text-sm leading-relaxed mb-6">{t('footer.description')}</p>
            <form className="flex max-w-xs mx-auto mb-6">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="flex-1 bg-white/10 border-0 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:ring-1 focus:ring-primary outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2.5 text-white hover:bg-primary/90 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all text-xs"
                  aria-label={social.name}
                >
                  {social.icon === 'fb' && 'f'}
                  {social.icon === 'tw' && '𝕏'}
                  {social.icon === 'ig' && '⌇'}
                  {social.icon === 'ta' && '◉'}
                </a>
              ))}
            </div>
          </div>

          {/* Private Dining */}
          <div className="md:text-right">
            <h5 className="text-white text-lg mb-4">{t('footer.privateDinning')}</h5>
            <p className="text-sm mb-2">
              {t('footer.mainEmailLabel')}{' '}
              <a href="mailto:Elroyale@7oroof.com" className="text-primary hover:text-primary/80">
                {t('footer.mainEmail')}
              </a>
            </p>
            <p className="text-sm mb-6">
              {t('footer.phoneLabel')}{' '}
              <span className="text-white/80">{t('footer.phone')}</span>
            </p>
            <Link
              to="/reservation"
              className="inline-flex items-center text-primary text-sm hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t('footer.reservations')}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs uppercase tracking-wider text-white/50 hover:text-primary transition-colors"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/40">
            &copy; {t('footer.copyright')}{' '}
            <a href="#" className="text-primary hover:text-primary/80">
              {t('footer.copyrightLink')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
