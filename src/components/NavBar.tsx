import { useContext, useState, useEffect, useRef, FC } from 'react'
import { TopAreaProps, UserProps } from '../types'
import { joinDate } from '../../utils/formatDate'
import { ThemeContext } from '../context/ThemeContext'
import { Form } from './Form'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
export const NavBar: FC<TopAreaProps> = ({ setUser }) => {
  const { modeLight, darkMode, lightMode } = useContext(ThemeContext)

  const [empty, setEmpty] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const userNameRef = useRef<HTMLInputElement>(null)
  const [inputUser] = useState('octocat')
  const fetchUser = async (user: string) => {
    const resp = await fetch(`https://api.github.com/users/${user}`)
    const data = await resp.json()
    if (resp.status !== 200) {
      setNotFound(true)
      setUser(null)
      return
    }
    setNotFound(false)

    const userData: UserProps = {
      pfp: data.avatar_url,
      name: data.name,
      joinedAt: joinDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      links: {
        location: data.location,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog
      }
    }
    setUser(userData)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      userNameRef.current?.value.trim() === '' ||
      userNameRef.current?.value.trim() === undefined
    ) {
      setEmpty(true)
      setUser(null)
      return
    }
    setEmpty(false)
    fetchUser(userNameRef.current?.value)
  }
  const handleChangeTheme = () => {
    if (modeLight) {
      darkMode()
    } else {
      lightMode()
    }
  }
  useEffect(() => {
    fetchUser(inputUser)
  }, [inputUser])
  return (
    <div className={`px-3 pt-3 w-5/6`}>
      <div
        className={`flex items-center font-bold font-mono text-xl md:text-3xl gap-4 cursor-pointer  justify-between ${
          modeLight ? 'text-[#1E2A47]' : 'text-white'
        }`}>
        <p>DevFinder</p>
        <div className='flex items-center gap-1' onClick={handleChangeTheme}>
          {modeLight ? (
            <>
              <p>DARK</p>
              <BsFillMoonFill size={30} />
            </>
          ) : (
            <>
              <p>LIGHT</p>
              <BsFillSunFill size={30} />
            </>
          )}
        </div>
      </div>
      <Form
        modeLight={modeLight}
        handleSubmit={handleSubmit}
        userNameRef={userNameRef}
        empty={empty}
        notFound={notFound}
      />
    </div>
  )
}
