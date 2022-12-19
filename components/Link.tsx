import NextLink from 'next/link'

export { Link }

function Link({ href, children }: { href: string; children: string }) {
  return <NextLink href={href}>{children}</NextLink>
}
