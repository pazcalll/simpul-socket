import { Head, router } from "@inertiajs/react";

import cs from "./InertiaExample.module.css";
import { useState } from "react";
import RoomSelector from "../components/RoomSelector";
import room from "../channels/room_channel.js";

export default function Index({ room_names }: { room_names: Array<unknown> | null }) {
	const maxLength = 32;
  const [roomNames, setRoomNames] = useState<Array<unknown> | null>(room_names);
  const [roomName, setRoomName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isTypeRoom, setIsTypeRoom] = useState<boolean>(true);

  const roomSocket = room(setRoomNames);

	const useSetRoom = (roomName: string) => {
		if (roomName.length > maxLength) roomName = roomName.slice(0, maxLength);
		setRoomName(roomName);
	}

	const useSetName = (name: string) => {
		if (name.length > maxLength) name = name.slice(0, maxLength);
		setName(name);
	}

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
    if (name.length < 1 || roomName.length < 1) alert("Please fill in your name and room name!");
    roomSocket.send_message(roomName);
    router.visit('/'+roomName, {
      method: 'get',
      data: {
        name: name,
      },
      preserveState: true,
      preserveScroll: true,
    })
    console.log("submitted roomName: ", roomName);
	}

  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <div className={`${cs.root} max-h-screen overflow-y-hidden overflow-x-hidden`}>
        <div>
          <h1 className={cs.h1}>Welcome to ChatApp!</h1>
          <small className="text-[#0000FF] text-sm">
            Please fulfil your data and select roomName before further actions!
          </small>
        </div>
        <div className="flex flex-col items-center">
          <div className="block card mt-5 max-w-[28rem] w-[28rem] md:w-[40rem] md:max-w-[40rem]">
            <div className="columns-2 text-center">
              <div className="block gap-0 space-y-0">
                <label className="text-2xl font-bold rounded-md">Enter your name: </label>
                <div className="border-b-2">
                  <input
                    type="text"
                    className="text-center rounded-md w-full py-2 bg-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
                    placeholder="Enter your name"
                    onInput={(e) => useSetName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
              <div className="block gap-0 space-y-0">
                <label className="text-2xl font-bold rounded-md">Room name: </label>
                <div className="border-b-2">
                  <input
                    type="text"
                    className="text-center rounded-md w-full py-2 bg-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
                    placeholder="Enter roomName name"
                    onInput={(e) => useSetRoom(e.target.value)}
                    value={roomName}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block card mt-5 max-w-[32rem] w-[32rem] md:w-[40rem] md:max-w-[40rem] min-h-screen">
            <div>
              <div className="w-full flex justify-center">
								<div className="w-[20rem] flex justify-around">
									<button
										className={`${
											isTypeRoom ? "bg-gray-300" : "bg-gray-100"
										} w-[6rem] h-[6rem] text-[12pt] rounded-full text-center cursor-pointer hover:bg-gray-300`}
										onClick={() => setIsTypeRoom(true)}
									>
										Type Room
									</button>
									<button
										className={`${
											!isTypeRoom ? "bg-gray-300" : "bg-gray-100"
										} w-[6rem] h-[6rem] text-[12pt] rounded-full text-center cursor-pointer hover:bg-gray-300`}
										onClick={() => setIsTypeRoom(false)}
									>
										Select Room
									</button>
								</div>
              </div>
              {isTypeRoom ? "" : <RoomSelector room_names={roomNames} setRoom={setRoomName} />}
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full mb-5 mt-5">
              <button
								className="cursor-pointer max-w-[28rem] w-[28rem] md:w-[40rem] md:max-w-[40rem] text-xl bg-green-300 rounded-lg py-3 mt-5"
								type="button"
								onClick={handleSubmit}
							>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
