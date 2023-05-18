import { FC, useContext } from 'react'
import { ThemeContext } from '../../context'
import { Link } from 'react-router-dom'
interface ReposInfoProps {
  repos: string
  followers: string
  following: string
  username: string
}

export const ReposInfo: FC<ReposInfoProps> = ({
  repos,
  followers,
  following,
  username
}) => {
  const { modeLight } = useContext(ThemeContext)

  return (
    <div
      className={`grid xl:flex justify-items-center  sm:gap-4 p-2 text-lg  sm:items-center gap-3  ${
        modeLight ? 'text-[#1E2A47] ' : 'text-white'
      } `}>
      <div
        className={` flex rounded-lg w-full text-lg sm:text-xl md:text-4xl md:p-7  ${
          modeLight ? ' bg-slate-200 ' : 'bg-[#1E2A47]'
        }`}>
        <div
          className={`w-1/3 grid text-center justify-items-center gap-2 mb-2`}>
          <p className={``}>Repos</p>
          {repos}
          <Link
            to={`https://github.com/${username}?tab=repositories`}
            target='_blank'
            className='
          bg-[#0079ff] text-sm text-white font-bold rounded-xl  p-2  w-4/6 transition-all duration-300 uppercase
          '>
            View
          </Link>
        </div>
        <div className={` w-1/3 grid text-center `}>
          <p className={``}>Followers</p>
          {followers}
        </div>
        <div className={` w-1/3 grid text-center  `}>
          <p className={``}>Following</p>
          {following}
        </div>
      </div>
      <div className=' grid justify-center  md:w-2/3 sm:w-1/2'>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${
            modeLight ? '' : 'tokyonight'
          }`}
          alt=''
          className='rounded-lg shadow-xl '
        />
      </div>
    </div>
  )
}
