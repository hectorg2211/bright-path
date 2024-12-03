import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'

export default function Home() {
  return (
    <p className='text-3xl font-medium text-sky-700'>
      <UserButton />
    </p>
  )
}
