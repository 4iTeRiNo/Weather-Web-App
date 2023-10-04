import { useEffect } from "react"
import { fetchDefaultCities } from "./store/defaultCitySlice"
import { useAppDispatch } from "./hooks"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Navigation } from "./components/Navigation"

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDefaultCities())
  }, [dispatch])

  return (
    <>
    <Header/>
    <Navigation/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
