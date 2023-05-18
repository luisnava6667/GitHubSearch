import { useContext } from 'react'
import { ThemeContext } from '../../context'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineLink } from 'react-icons/hi'
import { BsTwitter, BsBuildingsFill } from 'react-icons/bs'

interface LinksPropos {
  links: {
    location: string
    blog: string
    twitter: string
    company: string
  }
}
// [#1E2A47]
export const Links = ({ links }: LinksPropos) => {
  const { modeLight } = useContext(ThemeContext)
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 sm:justify-items-center p-3 text-xl sm:text-3xl font-semibold ${
        modeLight ? 'text-[#1E2A47]' : 'text-white'
      }`}>
      <div className='flex items-center gap-2'>
        <HiOutlineLink size={20} />
        {links.blog ? (
          <a href={links.blog} target='_blank'>
            {links.blog.slice(8, 20) + '...'}
          </a>
        ) : (
          <p className='text-gray-600'>Not Available</p>
        )}
      </div>
      <div className='flex items-center gap-2'>
        <BsBuildingsFill size={15} />
        {links.company ? (
          <p>{links.company}</p>
        ) : (
          <p className='text-gray-600'>Not Available</p>
        )}
      </div>
      <div className='flex items-center gap-2'>
        <FaMapMarkerAlt size={15} />
        {links.location ? (
          <p>{links.location.slice(0, 14) + '...'}</p>
        ) : (
          <p className='text-gray-600'>Not Available</p>
        )}
      </div>
      <div className='flex items-center gap-2'>
        <BsTwitter size={15} />
        {links.twitter ? (
          <a href={links.twitter} target='_blank'>
            {links.twitter.slice(0, 20) + '...'}
          </a>
        ) : (
          <p className='text-gray-600'>Not Available</p>
        )}
      </div>
    </div>
  )
}
