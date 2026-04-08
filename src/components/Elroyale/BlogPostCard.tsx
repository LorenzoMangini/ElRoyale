import { Link } from 'react-router-dom'
import { t } from '@/i18n'

interface BlogPostCardProps {
  id: string | number
  image: string
  categories: string[]
  title: string
  date: string
  excerpt?: string
}

export default function BlogPostCard({
  id,
  image,
  categories,
  title,
  date,
  excerpt,
}: BlogPostCardProps) {
  return (
    <article className="group">
      <Link to={`/blog/${id}`} className="block overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div>
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((cat) => (
            <span key={cat} className="text-primary text-xs font-medium">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-lg mb-2 hover:text-primary transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        <time className="text-muted-foreground text-xs">{date}</time>
        {excerpt && (
          <p className="text-muted-foreground text-sm mt-3 line-clamp-3">{excerpt}</p>
        )}
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-primary text-xs font-semibold uppercase tracking-wider mt-4 hover:text-primary/80 transition-colors"
        >
          {t('common.readMore')}
          <span className="ml-2">→</span>
        </Link>
      </div>
    </article>
  )
}
