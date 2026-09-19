import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10 border-b border-gray-200 dark:border-gray-800'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link
        href="/"
        aria-label="Home"
        className="hover:text-primary-500 text-lg font-medium tracking-tight text-gray-900"
      >
        Paarug
      </Link>
      <div className="flex items-center leading-5">
        <div className="no-scrollbar flex items-center gap-x-4 overflow-x-auto sm:gap-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
    </header>
  )
}

export default Header
