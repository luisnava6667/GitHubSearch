// import { TopArea } from './components/TopArea'
import {  useState } from 'react'

import { UserProps } from '../types'
import { Card, NavBar } from '../components'
export const GitHubSearchPage = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const setUserData = (data: UserProps | null): void => {
    setUser(data)
  }
  return (
      <div className='grid  justify-items-center pt-16'>
        <NavBar setUser={setUserData} />
        {user && <Card user={user} />}
      </div>
 
  )
}
