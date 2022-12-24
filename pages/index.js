import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-2 pb-8 md:space-y-5">
          <p className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Hello. I am Paarug Sethi.
          </p>
          <p className="text-lg leading-6 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="prose max-w-none pt-0 pb-3 text-base dark:prose-dark xl:col-span-2">
            An asymmetry hunter and polymath in aspiration. I love writing, creating visual content,
            and learning new things like creating AI tools and web3 development that make my inner
            nerd happy. Either lifting, reading, writing, drinking coffee or doing BJJ right now
            depending on the time of the day.
          </p>
          <ul className="prose list-none pt-0 text-base dark:prose-dark">
            <li>
              Head of Marketing and Comms at{' '}
              <a
                href="https://www.twitter.com/wordcel_club"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wordcel
              </a>
            </li>
            <li>
              Member and Head of the Host Committee at the{' '}
              <a
                href="https://www.twitter.com/SuperteamDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                SuperteamDAO
              </a>
            </li>
            <li>
              Co-founder of the{' '}
              <a href="https://linktr.ee/slipperyslopes" target="_blank" rel="noopener noreferrer">
                Slippery Slopes Podcast
              </a>
            </li>
            <li>
              Writing on my{' '}
              <a
                href="https://www.wordcelclub.com/paarug.sol"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>{' '}
              and{' '}
              <a href="https://twitter.com/paarugsethi" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              Previously wrote content at{' '}
              <a href="https://twitter.com/TimeswapLabs" target="_blank" rel="noopener noreferrer">
                Timeswap Labs
              </a>
            </li>
          </ul>
        </div>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
