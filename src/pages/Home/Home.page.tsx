import { RecipeCard } from '@/components/RecipeCard'
import './styles/styles.scss'
import useHomeViewModel from './view_model/home.view_model'

const HomePage = () => {
  const { a } = useHomeViewModel()

  return (
    <div className="content">
      <div className="content-header">
        <span>Nuevas Recetas</span>
      </div>
      <div className="content-items">
        {[...Array(4)].map((e, i) => (
          <RecipeCard />
        ))}
      </div>
    </div>
  )
}

export default HomePage
