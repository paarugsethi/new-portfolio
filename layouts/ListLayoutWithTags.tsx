'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div>
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <h1 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
          {title}
        </h1>
      </div>
      {pathname.startsWith('/blog') && (
        <div>
          <a
            href="https://x.com/ksw_arman/status/2091201471773614095"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/static/images/blog-tweet.png"
              alt="Paarug on writing"
              className="mx-auto w-full max-w-md rounded-lg border border-gray-200 p-1"
            />
          </a>
        </div>
      )}
      <ul className="pt-4">
        {displayPosts.map((post) => {
          const { path, date, title, summary } = post
          return (
            <li key={path} className="py-3">
              <article className="space-y-1">
                <div className="text-xs text-gray-400">
                  <time dateTime={date} suppressHydrationWarning>
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                </div>
                <h2 className="text-base font-semibold">
                  <Link href={`/${path}`} className="hover:text-primary-500 text-gray-900">
                    {title}
                  </Link>
                </h2>
                <p className="truncate text-sm text-gray-500">{summary}</p>
              </article>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
