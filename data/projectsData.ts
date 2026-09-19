interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'dilli [dot] wiki',
    description: "a local's guide to everything you need to know about falling in love with Dilli.",
    imgSrc: '/static/images/projects/dilli.png',
    href: 'https://dilli.wiki/',
  },
  {
    title: 'blr [dot] wiki',
    description: "a local's guide to falling in love with Bengaluru.",
    imgSrc: '/static/images/projects/blr.png',
    href: 'https://blr.wiki/',
  },
  {
    title: 'Worduel',
    description: '1v1 word duels for real stakes. Challenge friends, win money.',
    imgSrc: '/static/images/projects/worduel.svg',
    href: 'https://www.instagram.com/reel/DUaegEuD498/?stkn=MTV4czFtcW43cXk2YQ==',
  },
  {
    title: 'CheckGithub',
    description: 'A leaderboard of Superteam India members pushing code on GitHub.',
    imgSrc: '/static/images/projects/checkgithub.png',
    href: 'https://www.checkgithub.fun/',
  },
  {
    title: 'lohar [dot] fun',
    description: 'Buy tokenized Gold, Silver & Copper on Solana with USDC.',
    imgSrc: '/static/images/projects/lohar.svg',
    href: 'https://lohar.fun/',
  },
  {
    title: 'techbhai [dot] shop (shut down)',
    description: 'fun, minimal t-shirts around indian tech and pop culture.',
    imgSrc: '/static/images/techbhai.jpeg',
    href: 'https://techbhai.shop/',
  },
  {
    title: 'do not steal memes',
    description: "Please don't steal memes and repost them without credit.",
    imgSrc: '/static/images/projects/donotstealmemes.svg',
    href: 'https://www.donotstealmemes.com/',
  },
]

export default projectsData
