import styled from "styled-components"
import Link from 'next/link'
import images from '../data'


function NavLink({ to, children }) {
    return <Link href={to} style={{ display: "inline-block", background: "green", padding: ".5rem", borderRadius: "15px" }}>
        {children}
    </Link>
}

function Order({ imageUrl, title, desc }) {
    return (
        <div className="w-full h-80 md:h-80 text-center hover:opacity-80" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "600px 600px", backgroundPosition: "center" }}>
            <Figcaption>
                <h1 style={{textShadow: "3px 3px green"}} className="text-6xl p-2 font-bold">{title}</h1>
                <pre className="text-lg">{desc}</pre>
                <div className='text-sm text-center text-white font-semibold'>
                    <NavLink to="https://zomato.com">
                        ORDER&nbsp;NOW
                    </NavLink>
                </div>
            </Figcaption>
        </div>
    )
}



export default function Orderable() {
    return (
        <div>
            <div className="grid md:grid-cols-2 pt-2  gap-2">
                <Order title={"order1"} imageUrl="images/salad1.png" desc="Lorem ipsum" />
                <Order title={"order1"} imageUrl="images/salad2.jpg" desc="Lorem ipsum" />
                <Order title={"order1"} imageUrl="images/salad3.png" desc="Lorem ipsum" />
                <Order title={"order1"} imageUrl="images/salad4.jpg" desc="Lorem ipsum" />
            </div>
        </div>
    )
}


const Figcaption = styled('figcaption')`
position:relative;
top:50%;
color:whitesmoke;  
`
