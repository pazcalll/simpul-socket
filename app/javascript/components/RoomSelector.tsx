import { useState } from "react"

export default function RoomSelector({ room_names, setRoom }: { room_names: Array<unknown> | null, setRoom: (room: string) => void }) {
    const [selectedNumber, setSelectedNumber] = useState<number>();
    return <div className="flex flex-col items-center h-full w-full max-w-[32rem] md:max-w-[40rem] mx-auto">
        <h2 className="text-2xl mt-5 font-bold">Select Room: </h2>
        <div className="mt-3 overflow-y-auto w-full space-y-1 !max-h-[calc(100vh-28rem)] rounded-lg">
            {room_names && room_names.length > 0 ? (
                room_names.map((room_name: unknown, _index: number) => (
                    <>
                    <button
                        className={`${selectedNumber == _index ? 'bg-blue-500' : 'bg-blue-300'} py-2 text-[16pt] rounded-lg flex w-full justify-center cursor-pointer hover:bg-blue-500`}
                        key={room_name as string}
                        onClick={() => { setRoom(room_name as string); setSelectedNumber(_index) }}
                    >
                        {room_name as string}
                    </button>
                    </>
                ))
            ) : (
                <p className="text-[#FF0000] text-sm">No room available</p>
            )}
        </div>
    </div>
}