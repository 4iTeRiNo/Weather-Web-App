import { useEffect } from "react"
import { fetchCities } from "./store/defaultCitySlice"
import { useAppDispatch } from "./hooks"

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCities())

  }, [dispatch])

  return (
    <>
    </>
  )
}

export default App
