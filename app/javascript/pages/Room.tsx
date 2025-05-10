import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Chat from '../components/Chat'
import Header from '../components/Header'

export default function Room({room_name}: { room_name: string }) {
  return (
    <Layout>
      <div className='absolute top-2 left-2 bottom-0 w-[4rem] h-[3rem]'>
        <button className='w-full h-full text-xl mx-auto top-0 bottom-0 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-300' onClick={() => window.history.back()}>
          Back
        </button>
      </div>
      <Header title={"Room " + room_name}>
        <small className="text-[#0000FF] text-sm">
          Please chat politely and respect others!
        </small>
      </Header>
      <div className='h-screen max-h-[calc(100vh-10rem)] mt-5 mb-[100rem] overflow-y-auto mx-[1rem]'>
        <Chat />
      </div>
      <Footer>
        <div className='gap-2 w-full flex mx-auto'>
          <input type="text" className='w-full border border-gray-300 bg-gray-100 rounded-lg focus:outline-0 focus:ring-0' />
          <button className='bg-green-400 text-white w-52 py-2 cursor-pointer rounded-lg'>Send</button>
        </div>
      </Footer>
    </Layout>
  )
}
