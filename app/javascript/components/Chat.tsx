import { useEffect, useState } from "react";
import Balloon from "./Balloon";

export type TChat = {
  id: string|number,
  name: string,
  message: string,
}

export default function Chat({ initialChats }: { initialChats: Array<TChat> }) {
  const [chats, setChats] = useState<TChat[]>(initialChats);
  useEffect(() => {
    console.log("chats: ", chats);
    setChats(initialChats);
  }, [initialChats]);
  return (
    <div className="w-full h-full space-y-2 gap-2">
      {chats.map((chat, _index) => (
        <Balloon sender={chat.name} message={chat.message} isRTL={chat.id != localStorage.getItem('id') as string ? true : false} key={_index} />
      ))}
    </div>
  );
}
