import Headboard from "./components/Headboard/Headboard"
import HowHelp from "./components/HowHelp/HowHelp"
import OurProducts from "./components/OurProducts/OurProducts"
import Sponsors from "./components/Sponsors/Sponsors"
import WithUs from "./components/WithUs/WithUs"

function Home() {
  return (
    <div>
      <Headboard />
      <Sponsors />
      <WithUs />
      <HowHelp />
      <OurProducts />
    </div>
  )
}
export default Home