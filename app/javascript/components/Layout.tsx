import { Head } from "@inertiajs/react"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Head title="Group Chat App" />
        <div className={`absolute max-h-screen overflow-y-hidden overflow-x-hidden max-w-full w-full md:w-[44rem] md:max-w-[44rem]`}>
        {/* <div className={`${cs.root} max-h-screen overflow-y-hidden overflow-x-hidden max-w-[30rem] w-[30rem] md:w-[44rem] md:max-w-[44rem]`}> */}
            {children}
        </div>
    </>
}