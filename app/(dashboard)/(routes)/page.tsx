import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='text-3xl font-medium text-sky-700'>
      <UserButton />
    </div>
  )
}
