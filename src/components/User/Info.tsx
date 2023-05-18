import { FC } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
interface InfoProps {
  username: string
  bio: string
  name: string
  joinedAt: string
  pfp: string
}

export const Info: FC<InfoProps> = ({ username, bio, name, joinedAt, pfp }) => {
  const { modeLight } = useContext(ThemeContext)
  return (
    <div
      className={`grid  sm:gap-4 place-items-center p-2 text-lg sm:text-2xl ${
        modeLight ? 'text-[#1E2A47]' : 'text-white'
      }`}>
      <div className='flex items-center w-full mb-0'>
        <img src={pfp} alt={name} className='rounded-full w-24 h-20 sm:h-40 sm:w-40' />
        <div className='w-full px-3'>
          <div className='grid sm:flex sm:justify-between'>
            <h2
              className={`sm:text-6xl font-bold  ${
                modeLight ? 'text-[#1E2A47]' : 'text-white'
              }`}>
              {name}
            </h2>
            <p>{joinedAt}</p>
          </div>
          <a
            className='text-xl sm:text-3xl text-blue-700 '
            href={`https://github.com/${username}`}>
            @{username}
          </a>
          <p
            className={`hidden md:block ${
              modeLight ? 'text-[#1E2A47]' : 'text-white'
            } text-3xl leading-10`}>
            {bio}
          </p>
        </div>
      </div>
      <p
        className={` md:hidden ${
          modeLight ? 'text-[#1E2A47]' : 'text-white'
        } text-lg `}>
        {bio}
      </p>
    </div>
  )
}
