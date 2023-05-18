import { Route, Routes } from 'react-router-dom'
import { GitHubSearchPage } from './pages'
import './index.css'
import { useContext } from 'react'
import { ThemeContext } from './context'
function App() {
  const { modeLight } = useContext(ThemeContext)
  return (
    <div
      className={` lg:h-full xl:h-screen w-screen ${
        modeLight ? 'bg-slate-300' : 'bg-[#141D2F]'
      }
       `}>
      <Routes>
        <Route path='/' element={<GitHubSearchPage />} />
      </Routes>
    </div>
  )
}

export default App
