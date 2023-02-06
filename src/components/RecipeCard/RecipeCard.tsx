import './styles/styles.scss'

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <div className="recipe-card__static">
        <img src="/src/assets/Ojingeo-muchim-5.png" alt="" />
      </div>
      <div className="recipe-card__default">
        <div className="recipe-card__default-title">
          <span>
            Ojingeo <span>Muchim</span>
          </span>
        </div>
        <div className="recipe-card__default-rate">
          <div className="recipe-card__default-rate__qualify">
            <img src="/src/assets/icons/ic_star.svg" alt="" />
            <span>5.0</span>
          </div>
          <div className="recipe-card__default-rate__favorite">
            <img src="/src/assets/icons/ic-favorite.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="recipe-card__hover">
        <div className="recipe-card__hover-section">
          <img
            src="/src/assets/icons/ic_portion.svg"
            alt=""
            className="recipe-card__hover-section__icon"
          />
          <span className="recipe-card__hover-section__title">Tamaño de la porción</span>
          <span className="recipe-card__hover-section__label">4 raciones</span>
        </div>
        <div className="recipe-card__hover-section">
          <img
            src="/src/assets/icons/ic_time.svg"
            alt=""
            className="recipe-card__hover-section__icon"
          />
          <span className="recipe-card__hover-section__title">Tiempo de preparación</span>
          <span className="recipe-card__hover-section__label">10 minutos</span>
        </div>
        <div className="recipe-card__hover-section">
          <img
            src="/src/assets/icons/ic_chef.svg"
            alt=""
            className="recipe-card__hover-section__icon"
          />
          <span className="recipe-card__hover-section__title">Dificultad</span>
          <span className="recipe-card__hover-section__label">Fácil</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
