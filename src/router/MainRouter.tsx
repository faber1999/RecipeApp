import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { Suspense } from 'react'
import { Loader, MainLayout } from '@/components'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route path={path} key={path} element={<Component />} />
            ))}
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default MainRouter
