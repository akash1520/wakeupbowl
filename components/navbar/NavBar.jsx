import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'



function NavLink({ to, children }) {
    return <Link href={to} className={`mx-4`}>
        {children}
    </Link>
}
function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link className="text-xl font-bold" onClick={() => setTimeout(() => { setOpen(!open) }, 100)} href="/"><img width={100} alt='logo' src='/images/icon.png'/></Link>
            </div>
            <div className="flex flex-col font-semibold ml-4">
                <Link className="text-xl  my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </Link>
                <Link className="text-xl  my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className={`flex sticky filter ${open ? "h-screen w-screen" : "h-20"} drop-shadow-md bg-white px-4 py-4 items-start gap-5`}>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>
            <div className="w-10/12 flex items-center">
                <Link className={`text-2xl font-extrabold flex items-center ${!open?"absolute -top-3":"hidden"}`} href="/"><Image width={100} height={100} alt="" src='/images/icon.png'/>WakeUp<span className='text-green-900'>Bowl</span></Link>
            </div>
            <div className={`text-center py-5 md:px-5 hidden md:block ${open?"hidden":"h-full"} items-center absolute top-0 right-0 text-white font-semibold border-green-900 border bg-green-900`}>
                <NavLink to="https://zomato.com">
                    ORDER&nbsp;NOW
                </NavLink>
            </div>

        </nav>
    )
}