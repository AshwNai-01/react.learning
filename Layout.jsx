import { Outlet } from "react-router-dom"
import HeroNav from "./HeroNav"



const Layout = () => {
  return (
    <>
   <HeroNav/>
   <Outlet/>
    </>
   
  )
}

export default Layout