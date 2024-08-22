import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-[100vw] h-[100vh] bg-purple-200'>
        <div className="title w-[100vw] flex-col flex items-center">
          <div className="logo font-bold text-black text-3xl overflow-hidden gap-3">
            <span className='text-green-500'> &lt;</span>
            <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
          </div>
          <div className="desc">
            Your own Password Manager
          </div>
        </div>
        <div className="addpass flex flex-col items-centers w-[100vw] justify-center">
          <div className="details ">
            <div className="url">
              <input placeholder='Enter website url' className='pl-[20px]  rounded-full h-[40px]' type="text" name="url" id="url" />
            </div>
            <div className="idpass">
              <div className="username"></div>
              <div className="pass"></div>
            </div>
            <button className="addpass flex justify-center items-center">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover">
              </lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
