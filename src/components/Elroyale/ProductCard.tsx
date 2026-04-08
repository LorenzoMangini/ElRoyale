import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { t } from '@/i18n'

interface ProductCardProps {
  id: string | number
  image: string
  name: string
  price: string
  categories: string[]
}

export default function ProductCard({
  id,
  image,
  name,
  price,
  categories,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <button className="absolute bottom-0 left-0 right-0 bg-primary text-white text-xs font-semibold uppercase tracking-wider py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          {t('common.addToCart')}
        </button>
      </div>
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-1 mb-1">
          {categories.map((cat) => (
            <span key={cat} className="text-muted-foreground text-xs">
              {cat}
              {categories.indexOf(cat) < categories.length - 1 && ','}
            </span>
          ))}
        </div>
        <h4 className="text-base mb-1 hover:text-primary transition-colors">
          <Link to={`/product/${id}`}>{name}</Link>
        </h4>
        <span className="text-primary font-semibold text-sm">{price}</span>
      </div>
    </div>
  )
}
