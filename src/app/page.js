import Nav from "../../components/Nav/Nav";
import Image from "next/image";
import hero from "../../public/heroImage.jpg"
import Card from "../../components/Card/Card";



export default function Home() {
  return (
    <main>
      <Nav/>
      <section id="FirstSection">
      
        <div id="firstSection_top">
          <p>Unhappy with your website?</p>
          <p>We create beautiful and fast web services</p>
          <div>
            <Image src={hero} alt="Hero"/>
          </div>
        </div>

        <div id="firstSection_bottom">
          <p>Story,emotion and purpose</p>
          <p>
          We help transform your ideas into real world 
          applications that will outperform your toughest 
          competition and help you achieve your strategic 
          goals in short period of time.
          </p>

          <form id="firstSection_bottom_form">
            <label htmlFor="email" >Want us to contact you?</label>
            <div>
              <input type="text" placeholder="Email"/>
              <button>Join</button>
            </div>
          </form>
        </div>  
      </section>
      <Card/>
    </main>
  )
}
