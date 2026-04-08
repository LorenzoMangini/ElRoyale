import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { t } from '@/i18n'

interface Breadcrumb {
  label: string
  to?: string
}

interface PageTitleProps {
  subtitle?: string
  title: string
  backgroundImage: string
  breadcrumbs?: Breadcrumb[]
  className?: string
}

export default function PageTitle({
  subtitle,
  title,
  backgroundImage,
  breadcrumbs,
  className,
}: PageTitleProps) {
  return (
    <section
      className={cn(
        'relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center text-center bg-cover bg-center bg-fixed',
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {subtitle && (
          <span
            className="block text-primary text-2xl lg:text-3xl mb-2"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            {subtitle}
          </span>
        )}
        <h1 className="text-white text-3xl lg:text-5xl">{title}</h1>

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mt-6">
            <ol className="flex items-center justify-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span className="text-white/40">/</span>}
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-primary">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  )
}
