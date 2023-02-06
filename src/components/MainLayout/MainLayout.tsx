import { Banner } from '../Banner'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

import './styles/styles.scss'

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <Banner />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
