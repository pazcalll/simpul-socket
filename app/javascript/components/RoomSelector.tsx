export default function RoomSelector({ room_names, setRoom }: { room_names: Array<unknown> | null, setRoom: (room: string) => void }) {
    return <>
        <h2 className="text-2xl mt-5 font-bold">Select Room: </h2>
        <div className="mt-3 overflow-y-auto max-h-[20rem] w-full space-y-1">
            {room_names && room_names.length > 0 ? (
                room_names.map((room_name: unknown) => (
                    <>
                    <button
                        className="bg-blue-300 py-2 text-[16pt] rounded-lg flex w-full justify-center cursor-pointer hover:bg-blue-500"
                        key={room_name as string}
                        onClick={() => setRoom(room_name as string)}
                    >
                        {room_name as string}
                    </button>
                    </>
                ))
            ) : (
                <p className="text-[#FF0000] text-sm">No room available</p>
            )}
        </div>
    </>
}