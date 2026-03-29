import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

const components: MDXComponents = {
  img: (props) => (
    <Image
      sizes="(max-width: 768px) 100vw, 800px"
      style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
      {...(props as ImageProps)}
    />
  ),
  a: ({ href, children, ...props }) => {
    if (href?.startsWith('/') || href?.startsWith('#')) {
      return <Link href={href} {...props}>{children}</Link>
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
}

export function useMDXComponents(): MDXComponents {
  return components
}
