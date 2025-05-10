import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Chat, { TChat } from '../components/Chat'
import Header from '../components/Header'
import { useState } from 'react'
// @ts-ignore
import chat from '../channels/chat_channel.js'

type TChatSocket = {
  connected: () => void,
  disconnected: () => void,
  received: (data: TChat) => void
  send_message: (id: string, name: string, message: string) => void
}

export default function Room({room_name}: { room_name: string }) {
  const [chats, setChats] = useState<TChat[]>([])
  const [message, setMessage] = useState<string>("")
  const chatSocket = chat(room_name, chats, setChats) as TChatSocket
  const id = window.localStorage.getItem('id') as string
  const name = window.localStorage.getItem('name') as string

  if (!id || !name) {
    window.location.href = "/"
    return <></>
  }

  const useSetMessage = (messageInput: string) => {
    if (messageInput.length > 120) {
      messageInput = messageInput.slice(0, 120);
    }
    setMessage(messageInput);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (message.length < 1) {
      alert("Please fill in your message!");
      return;
    }
    chatSocket.send_message(id, name, message)
    setMessage("")
  }

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
        <Chat initialChats={chats} />
      </div>
      <Footer>
        <div className='gap-2 w-full flex mx-auto'>
          <input type="text" className='w-full border border-gray-300 bg-gray-100 rounded-lg focus:outline-0 focus:ring-0' value={message} onInput={(e) => useSetMessage(e.target.value)} />
          <button className='bg-green-400 text-white w-52 py-2 cursor-pointer rounded-lg' onClick={handleSubmit}>Send</button>
        </div>
      </Footer>
    </Layout>
  )
}
