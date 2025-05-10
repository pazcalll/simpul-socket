import { Head } from "@inertiajs/react"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Head title="Group Chat App" />
        <div className={`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute max-h-screen overflow-y-hidden overflow-x-hidden max-w-full w-full md:w-[44rem] md:max-w-[44rem] bg-white`}>
        {/* <div className={`${cs.root} max-h-screen overflow-y-hidden overflow-x-hidden max-w-[30rem] w-[30rem] md:w-[44rem] md:max-w-[44rem]`}> */}
            {children}
        </div>
    </>
}