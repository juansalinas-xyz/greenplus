import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Headboard from "./components/Headboard/Headboard"
import HowHelp from "./components/HowHelp/HowHelp"
import OurProducts from "./components/OurProducts/OurProducts"
import Sponsors from "./components/Sponsors/Sponsors"
import Team from "./components/Team/Team"
import WithUs from "./components/WithUs/WithUs"

function Home() {
  return (
    <div>
      <Headboard />
      <Sponsors />
      <WithUs />
      <HowHelp />
      <OurProducts />
      <Contact />
      <Team />
      <Footer />
    </div>
  )
}
export default Home