import { Head } from '@inertiajs/react'

export default function Room({room_name}: { room_name: string }) {
  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />
      {room_name}
      <br />
      Your very first room here
    </>
  )
}
