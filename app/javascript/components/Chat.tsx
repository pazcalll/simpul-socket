import { useEffect, useState } from "react";
import Balloon from "./Balloon";
import { usePage } from "@inertiajs/react";

export type TChat = {
  id: string|number,
  name: string,
  message: string,
}

export default function Chat({ initialChats }: { initialChats: Array<TChat> }) {
  const props = usePage<{id: string, name:string, room_name: string}>().props;
  const [chats, setChats] = useState<TChat[]>(initialChats);
  useEffect(() => {
    console.log("chats: ", chats);
    setChats(initialChats);
  }, [initialChats]);
  return (
    <div className="w-full space-y-2 gap-2">
      <div className="mx-2">
        {chats.map((chat, _index) => (
          <Balloon sender={chat.name} message={chat.message} isRTL={chat.id != props.id ? true : false} key={_index} />
        ))}
      </div>
    </div>
  );
}
