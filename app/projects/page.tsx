import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div>
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <h1 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
          Projects
        </h1>
      </div>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-2 pb-8 sm:grid-cols-2">
        {projectsData.map((project) => (
          <li key={project.title} className="py-4">
            <Link
              href={project.href || '#'}
              className="group flex items-center gap-4"
              aria-label={project.title}
            >
              {project.imgSrc && (
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
                />
              )}
              <div className="min-w-0">
                <h2 className="group-hover:text-primary-500 text-base font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="truncate text-sm text-gray-500">{project.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
