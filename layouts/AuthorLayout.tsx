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
    <div className="flex flex-wrap md:flex-nowrap bg-gray-100 dark:bg-zinc-800 p-5 rounded-lg shadow-lg">
      <div className="md:w-1/3 bg-white dark:bg-[#282828] rounded-lg p-4 shadow-md">
        <div className="text-center">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full mx-auto"
            />
          )}
          <h3 className="pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{company}</div>
        </div>
        <div className="flex justify-center space-x-3 pt-6">
          <SocialIcon kind="mail" href={`mailto:${email}`} />
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
          <SocialIcon kind="twitter" href={twitter} />
        </div>
      </div>
      <div className="md:w-2/3  bg-white dark:bg-[#282828] rounded-lg p-4 shadow-md md:ml-4 mt-4 md:mt-0">
        <div className="dark:text-slate-50 prose dark:prose-dark max-w-none">{children}</div>
      </div>
    </div>
  )
}