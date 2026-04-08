import { cn } from '@/lib/utils'
import { images } from '@/data/images'

interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  className?: string
  light?: boolean
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  className,
  light,
}: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      {subtitle && (
        <span
          className={cn(
            'block text-2xl lg:text-3xl mb-1',
            light ? 'text-primary' : 'text-primary'
          )}
          style={{ fontFamily: 'var(--font-accent)' }}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl lg:text-4xl mb-4',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      <img
        src={images.shape2.url}
        alt=""
        className="mx-auto mb-4 h-3"
        aria-hidden="true"
      />
      {description && (
        <p
          className={cn(
            'max-w-2xl mx-auto text-sm leading-relaxed',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
