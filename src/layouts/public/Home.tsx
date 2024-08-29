import { Outlet } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <h1>Estamos en home</h1>
        <Outlet/>
    </div>
  )
}
