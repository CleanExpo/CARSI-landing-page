import Image from 'next/image'
import type { ImageMetadata } from '@/types'

interface ResponsiveImageProps extends ImageMetadata {
  className?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  loading?: 'lazy' | 'eager'
}

/**
 * Responsive image component with automatic optimization
 * Handles desktop, tablet, and mobile breakpoints with Next.js Image optimization
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
  objectFit = 'cover',
  loading = 'lazy',
}: ResponsiveImageProps) {
  const imageProps = {
    src,
    alt,
    className,
    loading: priority ? undefined : loading,
    priority,
    sizes,
  }

  if (width && height) {
    return (
      <Image
        {...imageProps}
        width={width}
        height={height}
        style={{ objectFit }}
      />
    )
  }

  return (
    <Image
      {...imageProps}
      fill
      style={{ objectFit }}
    />
  )
}
