import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout
