import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import MainLayout from '../components/MainLayout/MainLayout'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<div>recetas</div>}></Route>
        </Route>
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
