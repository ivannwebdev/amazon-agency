import { FC, ReactElement } from 'react'
import { AppRoutes } from '../router'
import { Route, Routes } from 'react-router-dom'

const AppRouter: FC = (): ReactElement => {
  return (
    <Routes>
      {
        AppRoutes.map(
          route => <Route {...route} key={route.path} element={<route.element />} />
        )
      }
    </Routes>
  )
}

export { AppRouter }
