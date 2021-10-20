import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen}) {
    return (
        <div className={"Menu " + (menuOpen && "active")}>
            <u1>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Spotlight">Spotlight</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Contact">Contact</a>
                </li>
            </u1>
        </div>
    )
}
