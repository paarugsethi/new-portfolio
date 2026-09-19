import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const linkClass = 'font-medium text-primary-500 hover:text-primary-600'

export default function Home() {
  const bio = (
    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
      A technology brother and polymath in aspiration. I love writing, creating content, and
      learning new things that make my inner nerd happy. Either lifting, reading, writing, drinking
      coffee or doing Jiu Jitsu right now depending on the time of the day, all while listening to a
      podcast.
    </p>
  )

  const pointers = (
    <div className="divide-y divide-gray-100 dark:divide-gray-800">
      <ul className="list-disc space-y-1 pb-4 pl-5 text-base leading-relaxed text-gray-700 marker:text-gray-400 dark:text-gray-300">
        <li>
          Leading the{' '}
          <a
            href="https://x.com/SuperteamIN/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Superteam India
          </a>{' '}
          ecosystem
        </li>
        <li>
          Previously did Content and Research at{' '}
          <a
            href="https://squads.so/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Squads Labs
          </a>{' '}
          for{' '}
          <a
            href="https://x.com/fusewallet"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Fuse
          </a>{' '}
          and{' '}
          <a
            href="https://x.com/Multisig"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Multisig
          </a>
        </li>
        <li>
          Ran{' '}
          <a
            href="https://www.x.com/SuperteamEarn"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Superteam Earn
          </a>
          ’s X account from 0 to 25k followers in 11 months
        </li>
        <li>
          Lead 0 to 1 growth and marketing at{' '}
          <a
            href="https://www.twitter.com/gumisfunn"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Gum
          </a>{' '}
          /{' '}
          <a
            href="https://twitter.com/wordcel_club"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wordcel
          </a>
        </li>
      </ul>
      <ul className="list-disc space-y-1 py-4 pl-5 text-base leading-relaxed text-gray-700 marker:text-gray-400 dark:text-gray-300">
        <li>
          I am mostly writing on{' '}
          <a
            href="https://x.com/paarugsethi"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            X
          </a>{' '}
          and creating reels on{' '}
          <a
            href="https://www.instagram.com/paarugsethi/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Instagram
          </a>
        </li>
        <li>
          I made{' '}
          <a
            href="https://dilli.wiki/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            dilli.wiki
          </a>{' '}
          and{' '}
          <a
            href="https://blr.wiki/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            blr.wiki
          </a>
        </li>
        <li>Usually vibecoding apps and games for me and my friends</li>
        <li>
          I used to sell{' '}
          <a
            href="https://x.com/paarugsethi/status/1871869093458182434?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            fun tshirts
          </a>{' '}
          at{' '}
          <a
            href="https://techbhai.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            techbhai.shop
          </a>{' '}
          (DM me if you’d like one)
        </li>
        <li>
          I started a podcast called{' '}
          <a
            href="https://linktr.ee/slipperyslopes"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Slippery Slopes Podcast
          </a>{' '}
          in 2020
        </li>
      </ul>
      <ul className="list-disc space-y-1 pt-4 pl-5 text-base leading-relaxed text-gray-700 marker:text-gray-400 dark:text-gray-300">
        <li>I am also a Jiu Jitsu blue belt and an ADCC gold medalist</li>
        <li>Recently ran a 1:46 Solo Hyrox</li>
        <li>Mostly lifting or rolling on the mats</li>
      </ul>
    </div>
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-8 pb-8 md:pt-12">
        {/* Mobile: photo floated, text wraps around it */}
        <div className="md:hidden">
          <p className="text-[1.7rem] leading-tight font-extrabold tracking-tight whitespace-nowrap text-gray-900 dark:text-gray-100">
            Hello. I am Paarug Sethi.
          </p>
          <img
            src="/static/images/home-photo.jpeg"
            alt="Paarug Sethi"
            className="float-right mt-5 mb-3 ml-5 w-2/5 max-w-[240px] rounded-lg"
          />
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="mt-4">{bio}</div>
          <div className="clear-both mt-6">{pointers}</div>
        </div>

        {/* Desktop: photo spans down the right column */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
            <div className="col-span-2 col-start-1 row-start-1 space-y-4">
              <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                Hello. I am Paarug Sethi.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
              {bio}
            </div>
            <div className="col-start-3 row-span-2 row-start-1 self-start">
              <img
                src="/static/images/home-photo.jpeg"
                alt="Paarug Sethi"
                className="w-full max-w-xs rounded-lg"
              />
            </div>
            <div className="col-span-2 col-start-1 row-start-2">{pointers}</div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 pt-12 pb-10">
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={5} />
          <SocialIcon kind="x" href={siteMetadata.x} size={5} />
        </div>
      </div>
    </div>
  )
}
