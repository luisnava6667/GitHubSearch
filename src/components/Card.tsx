import { FC, useContext } from 'react'
import { UserDataProps } from '../types'
import { ThemeContext } from '../context'
import { Info, Links, ReposInfo } from './User'

export const Card: FC<UserDataProps> = ({ user }) => {
  const { modeLight } = useContext(ThemeContext)
  const { username, bio, name, joinedAt, pfp } = user

  return (

    <div className={`px-3 pt-3 w-5/6 grid  `}>
        <div
        className={`rounded-lg md:rounded-xl ${
          modeLight ? 'bg-white' : 'bg-[#1E2A47]'
        }`}>
        <Info
          username={username}
          name={name}
          joinedAt={joinedAt}
          bio={bio}
          pfp={pfp}
        />
        <ReposInfo
          followers={user.followers}
          following={user.following}
          repos={user.repos}
          username={user.username}
        />

        <Links links={user.links} />
      </div>
    </div>
  )
}
