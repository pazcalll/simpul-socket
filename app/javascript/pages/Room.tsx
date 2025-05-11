import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Chat, { TChat } from '../components/Chat'
import Header from '../components/Header'
import { useEffect, useRef, useState } from 'react'
// @ts-ignore
import chat from '../channels/chat_channel.js'

type TChatSocket = {
  connected: () => void,
  disconnected: () => void,
  received: (data: TChat) => void
  send_message: (id: string, name: string, message: string) => void
}

export default function Room({room_name, name, id}: { room_name: string, name: string, id: string }) {
  const [chats, setChats] = useState<TChat[]>([])
  const [message, setMessage] = useState<string>("")
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const chatSocket = chat(room_name, chats, setChats, id, name) as TChatSocket

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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (message.length < 1) {
      alert("Please fill in your message!");
      return;
    }
    chatSocket.send_message(id, name, message)
    setMessage("")
  }

  useEffect(() => {
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = window.innerHeight * chats.length;
      }
    }, 500)
  }, [chats])

  return (
    <Layout>
      <div className='absolute top-2 left-4 bottom-0 w-[4rem] h-[3rem]'>
        <button className='w-full h-full text-xl mx-auto top-0 bottom-0 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-300' onClick={() => window.history.back()}>
          Back
        </button>
      </div>
      <div className='absolute top-2 right-4 bottom-0 w-[12rem] h-[3rem]'>
        <div className='w-full h-full text-xs text-right mx-auto top-0 bottom-0 rounded-lg text-gray-300'>
          <p>{name}</p>
          <p>(ID) {id}</p>
        </div>
      </div>
      <Header title={"Room " + room_name}>
        <small className="text-[#0000FF] text-sm">
          Please chat politely and respect others!
        </small>
      </Header>
      <div className='h-screen max-h-[calc(100vh-10rem)] mt-5 mb-[100rem] overflow-y-auto mx-[1rem] bg-gray-100 rounded-2xl' ref={chatContainerRef}>
        <Chat initialChats={chats} />
      </div>
      <Footer>
        <div className='gap-2 w-full flex mx-auto'>
          <input type="text" className='w-full border border-gray-300 bg-gray-100 rounded-xl focus:outline-0 focus:ring-0' value={message} onInput={(e) => useSetMessage(e.target.value)} onKeyDown={(e) => {if (e.keyCode == 13) handleSubmit(e)}} />
          <button className='bg-green-400 hover:bg-green-600 text-white w-52 py-2 cursor-pointer rounded-lg' onClick={handleSubmit}>Send</button>
        </div>
      </Footer>
    </Layout>
  )
}
