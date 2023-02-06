import { lazy } from 'react'

const HomePage = lazy(() => import('@/pages/home/Home.page'))
const RecipesPage = lazy(() => import('@/pages/recipes/Recipes.page'))
const DetailRecipePage = lazy(() => import('@/pages/recipes/detail/DetailRecipe.page'))

const routes = [
  { path: '', Component: HomePage },
  { path: 'recipes/:id', Component: RecipesPage },
  { path: 'recipes/detail/:id', Component: DetailRecipePage }
]

export default routes
