import { BiSearch } from 'react-icons/bi'
interface Props {
  modeLight: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  userNameRef: React.MutableRefObject<HTMLInputElement | null>
  empty: boolean
  notFound: boolean
}
export const Form = ({
  modeLight,
  handleSubmit,
  userNameRef,
  empty,
  notFound
}: Props) => {
  console.log(modeLight)

 
  return (
    <div
      className={` grid mt-7 rounded-xl md:rounded-2xl text-blue-500 font-bold  py-3 ${
        modeLight ? 'bg-white' : 'bg-[#1E2A47] '
      }`}>
      <form
        className='grid md:flex p-5 md:justify-center items-center gap-2'
        onSubmit={(e) => {
          handleSubmit(e)
        }}>
        <div className='md:w-5/6 w-full '>
          <label htmlFor='' className='h-10 cursor-pointer hidden'>
            <BiSearch size={40} />
          </label>
          <input
            ref={userNameRef}
            name='userName'
            id='userName'
            type='text'
            autoComplete='off'
            placeholder='Search GitHub Username...'
            className='w-full rounded-md p-3 text-lg md:text-3xl bg-transparent'
          />
        </div>

        <button
          type='submit'
          className='bg-[#0079ff] text-2xl text-white font-bold rounded-xl  p-3  transition-all duration-300 uppercase '>
          Search
        </button>
      </form>
      <p className=' text-red-700 text-xl md:text-2xl text-center md:h-9'>
        {empty
          ? 'Username cannot be empty'
          : notFound
          ? 'Username not found'
          : null}
      </p>
    </div>
  )
}
