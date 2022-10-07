import useHomeViewModel from './view_model/home.view_model'
const HomePage = () => {
  const { a } = useHomeViewModel()

  return <>{a}</>
}

export default HomePage
