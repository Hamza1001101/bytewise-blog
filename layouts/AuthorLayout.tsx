import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <div className="dark:text:white min-h-screen bg-white p-8 text-black dark:bg-dark-bg dark:text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex flex-col items-center md:w-1/3 md:items-start">
            {avatar && (
              <Image src={avatar} alt="avatar" width={192} height={192} className="rounded-full" />
            )}
            <h1 className='mt-4 text-3xl font-bold'>{name}</h1>
            <h2 className='mt-2 text-xl'> {occupation} </h2>
            <p className='text-md'> {company} </p>
            <div className='mt-4 flex space-x-4'>
              <SocialIcon kind="mail" href={`mailto:${email}`} size={8} />
              <SocialIcon kind="github" href={github} size={8} />
              <SocialIcon kind="linkedin" href={linkedin} size={8} />
              <SocialIcon kind="twitter" href={twitter} size={8} />
            </div>
          </div>

          <div className='mt-8 md:mt-0 md:w-2/3'>
              <div className='dark:prose-dark prose max-w-none dark:text-white'> {children} </div>
          </div>
        </div>
      </div>
    </div>
  )
}
