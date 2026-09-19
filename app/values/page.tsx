import { ReactNode } from 'react'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Values' })

const values: { heading: string; body: ReactNode[] }[] = [
  {
    heading: 'It is better to be a warrior in a garden than a gardener in a war',
    body: [
      'I am a martial artist first and foremost. Even though it has a ton of meathead connotations, all I care about is taking care of myself and a loved one, knowing that I can control my surroundings and take responsibility when it matters the most. And I love how that translates into all aspects of my life in different ways.',
    ],
  },
  {
    heading: 'Winning alone = losing',
    body: [
      'I’m convinced that the only way to truly win in life is by elevating the people around you, bringing them along for the ride and shining light on them as it starts shining on you.',
      '“Lonely at the top” is a scarcity mindset. It’s only worth it if you win together with the homies.',
    ],
  },
  {
    heading: 'Almost nothing matters more than loyalty',
    body: [
      <>
        <a
          href="https://www.youtube.com/watch?v=v_tDXqwgHSk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600"
        >
          Loyalty is the lifeblood of humanity.
        </a>{' '}
        It’s extremely hard when truly tested, but it’s all you can stand for.
      </>,
    ],
  },
  {
    heading: 'Agency and ownership are the only 2 tenets',
    body: ['Talent, luck, or network don’t matter. What would you do if you had 10x the agency?'],
  },
  {
    heading: 'If it’s not a hell yes, it’s a no',
    body: ['This does not need explaining. Kash Dhanda taught me this.'],
  },
  {
    heading: 'Career is a jungle gym, not a ladder',
    body: [
      'This is from Akshay BD. Everything I have been able to do in my career is because I read this quote in 2021 as a college student.',
    ],
  },
  {
    heading: 'You will never regret taking a flight',
    body: [
      'Attend the event. Take that meeting IRL. Visit that place. The price of the ticket will never matter.',
    ],
  },
  {
    heading: 'The world is a museum of passion projects',
    body: [
      <>
        <a
          href="https://x.com/collision/status/1529452415346302976?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600"
        >
          This tweet
        </a>
        .
      </>,
    ],
  },
  {
    heading: 'It’s good to be a white belt',
    body: [
      'I’m a blue belt in Jiu Jitsu but a black belt at making memes and writing a funny ad script, and a brown belt at lifting. But more importantly, I’m a white belt at a lot of things with the freedom to improve and get better. It’s great to be a beginner at something. Embarrassment is an underexplored emotion.',
    ],
  },
  {
    heading: 'Crack a joke, especially when you should not',
    body: ['Life is too short.'],
  },
  {
    heading: 'High effort',
    body: [
      'Always be high effort. Always. Especially when it hurts and feels extra and unnecessary. Always be high effort.',
    ],
  },
]

export default function Values() {
  return (
    <div>
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <h1 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
          Values
        </h1>
      </div>
      <div className="max-w-2xl space-y-10 pt-2 pb-8">
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
          <p>
            I have gone through phases of life where I have incessantly written down the reasons and
            heuristics I follow and use, but also phases where I just let things flow and run on
            cruise control without documenting anything.
          </p>
          <p>
            As I thought about a values page, these themes came to mind. Some of them are original
            thoughts, and some (most) are from great people I have followed for years. I also think
            values are not as static as a manifesto is, so these are neither exhaustive nor fixed.
          </p>
        </div>
        {values.map((v) => (
          <div key={v.heading} className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {v.heading}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
              {v.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
