import { notFound } from 'next/navigation'

// About page is hidden for now. To re-enable, restore the previous implementation
// (git history) and uncomment the /about link in data/headerNavLinks.ts.
export default function Page() {
  notFound()
}
