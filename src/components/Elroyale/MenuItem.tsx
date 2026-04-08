import { cn } from '@/lib/utils'

interface MenuItemProps {
  name: string
  description: string
  price: string
  image?: string
  tag?: string
  className?: string
}

export default function MenuItem({
  name,
  description,
  price,
  image,
  tag,
  className,
}: MenuItemProps) {
  return (
    <div className={cn('flex gap-4 py-4', className)}>
      {image && (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          {tag && (
            <span className="text-[10px] uppercase tracking-wider text-primary font-semibold bg-primary/10 px-2 py-0.5">
              {tag}
            </span>
          )}
          <div className="flex items-baseline gap-1 flex-1 min-w-0">
            <h4 className="text-foreground text-base font-normal truncate" style={{ fontFamily: 'var(--font-heading)' }}>
              {name}
            </h4>
            <span className="flex-1 border-b border-dashed border-border min-w-[20px]" />
            <span className="text-primary font-semibold text-sm flex-shrink-0">
              {price}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
