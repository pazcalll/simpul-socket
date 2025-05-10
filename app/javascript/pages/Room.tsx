import { useState } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Room({room_name}: { room_name: string }) {
  const [message, setMessage] = useState<string>('')
  let loop = []
  for (let i = 0; i < 100; i++) {
    loop.push(i)
  }
  return (
    <Layout>
      <div className='min-h-screen overflow-y-auto'>
        <h1 className="text-3xl font-bold">Room {room_name}</h1>
        <div className='min-h-screen mt-5 mb-[100rem]'>
          <p className="text-[#0000FF] text-sm">
            This is the room {room_name}!
          </p>
          <form action="#" className='w-full h-full'>
            {
              loop.map((i) => (
                <div className='h-full bg-gray-300 w-full space-y-1'>
                  asdfasdf
                </div>
              ))
            }
            <Footer>
                <div className='flex justify-between items-center gap-2'>
                  <input type="text" className='w-full border border-gray-300 bg-gray-100 rounded-lg focus:outline-0 focus:ring-0' />
                  <button className='bg-green-400 text-white w-52 py-2 cursor-pointer rounded-lg'>Send</button>
                </div>
            </Footer>
          </form>
        </div>
      </div>
    </Layout>
  )
}
