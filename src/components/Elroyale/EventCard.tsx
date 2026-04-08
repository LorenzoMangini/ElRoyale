import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { t } from '@/i18n'

interface EventCardProps {
  id: string | number
  image: string
  dateRange: string
  title: string
  soldOut?: boolean
}

export default function EventCard({
  id,
  image,
  dateRange,
  title,
  soldOut = false,
}: EventCardProps) {
  return (
    <article className="group text-center">
      <Link to={`/event/${id}`} className="block overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex items-center justify-center gap-3 mb-3">
        <time className="text-muted-foreground text-xs">{dateRange}</time>
        <span
          className={cn(
            'text-[10px] uppercase tracking-wider font-semibold px-3 py-1',
            soldOut
              ? 'text-destructive bg-destructive/10'
              : 'text-success bg-success/10'
          )}
        >
          {soldOut ? 'Sold Out' : 'Tickets Available'}
        </span>
      </div>
      <h3 className="text-lg mb-3 hover:text-primary transition-colors">
        <Link to={`/event/${id}`}>{title}</Link>
      </h3>
      <Link
        to={`/event/${id}`}
        className="inline-flex items-center text-primary text-xs font-semibold uppercase tracking-wider hover:text-primary/80 transition-colors"
      >
        {t('common.findOutMore')}
        <span className="ml-2">→</span>
      </Link>
    </article>
  )
}
