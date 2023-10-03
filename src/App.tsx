import { useEffect } from "react"
import { fetchDefaultCities } from "./store/defaultCitySlice"
import { useAppDispatch } from "./hooks"

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDefaultCities())
  }, [dispatch])

  return (
    <>
    </>
  )
}

export default App
