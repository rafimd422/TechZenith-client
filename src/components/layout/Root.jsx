import { Outlet } from "react-router-dom"
import Nav from './../Fixed/Nav';
import Footer from "../Fixed/Footer";

const Root = () => {
  return (<>
    <div>
<Nav />
  <Outlet/>
 <Footer />
    </div>
    </>
  )
}

export default Root
