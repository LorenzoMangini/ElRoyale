import { cn } from '@/lib/utils'

interface FilterButtonsProps {
  filters: { label: string; value: string }[]
  activeFilter: string
  onFilterChange: (value: string) => void
  className?: string
}

export default function FilterButtons({
  filters,
  activeFilter,
  onFilterChange,
  className,
}: FilterButtonsProps) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-2 mb-10', className)}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'px-6 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
            activeFilter === filter.value
              ? 'bg-primary text-white'
              : 'bg-transparent text-muted-foreground hover:text-primary'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
