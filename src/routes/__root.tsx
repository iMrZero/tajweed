import {  createRootRoute } from '@tanstack/react-router'
import App from '@/App'

export const Route = createRootRoute({
  notFoundComponent: () => <h1>هنالك غلط</h1>,
  component: App ,
})

