import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className=" py-12 dark:bg-[#282828]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
            Latest Posts
          </h1>
          <ul className="space-y-8">
            {!posts.length && <li>No posts found.</li>}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li
                  key={slug}
                  className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-[#282828]"
                >
                  <article>
                    <div>
                      <dl className="mb-4">
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div>
                        <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-[#ebdbb2]">
                          <Link href={`/blog/${slug}`}>{title}</Link>
                        </h2>
                        <div className="mt-2 flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 text-gray-700 dark:text-gray-300">{summary}</div>
                      <div className="mt-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {posts.length > MAX_DISPLAY && (
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="text-lg font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
          <div
            style={{ margin: 'auto' }}
            className="m-auto mx-2 my-12 flex w-[300px] items-center justify-center sm:w-[400px] md:w-[550px]"
          >
            <NewsletterForm title="Get the latest geeky goodies in your inbox – fast, no snail mail involved!" />
          </div>
        </div>
      </div>
    </>
  )
}