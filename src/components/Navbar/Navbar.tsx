import { NavLink } from 'react-router-dom'
import routes from '../../router/routes'
import './styles/styles.scss'

const Navbar = () => {
  const categories = [
    {
      id: 1000,
      description: 'Vegetarianos'
    },
    {
      id: 2000,
      description: 'Platos Principales'
    },
    {
      id: 3000,
      description: 'Tortas'
    },
    {
      id: 4000,
      description: 'Comida Rápida'
    },
    {
      id: 5000,
      description: 'Menú Niños'
    },
    {
      id: 6000,
      description: 'Sopas'
    }
  ]

  return (
    <div className="navbar">
      <div className="navbar-branch">
        <span>
          Recipe<span>App</span>
        </span>
      </div>
      <div className="navbar-items">
        <NavLink to={''} end>
          Home
        </NavLink>

        {routes
          .filter(({ path }) => path === 'recipes/:id')
          .map(({ path }) =>
            categories.map(({ id, description }) => {
              const toPath = path.replace(':id', `${id}`)
              return (
                <NavLink key={id} to={toPath} end>
                  {description}
                </NavLink>
              )
            })
          )}
      </div>
    </div>
  )
}

export default Navbar
