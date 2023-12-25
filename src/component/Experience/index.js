import experience from './Experience';

const ImagedComponent = (path, mode) => {

  return (
    <img className={`flex h-48 drop-shadow-[0px 35px 35px rgba(33, 126, 143, 0.23)]`} src={path}></img>
  )
}
const details = (heading, desc) => {
  return (
    <div className='flex flex-col rounded-md '>
      <div className='p-2'>{heading}</div>
      <div className='gap-2 p-4 text-slate-700'>{desc}</div>
    </div>
  )
}

const Experience = () => {

  return (
    <>
      <div>
        <h3 className="flex items-center justify-center text-lg font-semibold tracking-[.45em] text-red-700/60" color="#ae5959">CODING JOURNEY</h3>
        <h2 className="flex items-center justify-center font-semibold">The Adventure of Learning Code</h2>
      </div>
      <div className='flex flex-col w-full justify-center place-items-center items-center'>
        {experience.map((data) =>
          <div className="flex w-full xl:w-3/5  grid-cols-3 size-full gap-2 items-center h-56 gap-x-10 justify-center place-items-center">
            <div className="flex pr-1.5 justify-center lg:justify-end md:justify-end xl:justify-end 2xl:justify-end w-full items-center h-56">
              {data.leftImage ? ImagedComponent(data.right, data.mode) : details(data.heading, data.desc)}
            </div>
            <div className=" w-px h-56 justify-center items-center flex bg-gray-200">
              <div className="flex justify-center w-11 h-11 rounded-full bg-cyan-900 absolute items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className=" items-center justify-center">
                  {data.year}
                </div>
              </div>
            </div>
            <div className='flex pl-1.5 w-full items-center justify-center lg:justify-start md:justify-start xl:justify-start  h-56'
            >
              {data.leftImage ? details(data.heading, data.desc) : ImagedComponent(data.right, data.mode)}
            </div>
          </div>
        )
        }
      </div>
      <div className='flex items-center justify-center'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2L2 12 12 22 22 12l-2-2-4 4-4-4-2 2M2 12h4v4h4v-4h4L12 2z"></path>
        </svg>
        Forever Coding
      </div>
    </>
  )

}

export default Experience