import "./nav.css"
import Image from "next/image"

function Nav() {
  return (
    <nav>
        <h3>Edie</h3>
        <div>
            <Image src="./menu.svg" alt="Menu" width={30} height={30} />
        </div>
    </nav>
  )
}

export default Nav