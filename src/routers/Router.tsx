
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../layouts/public/Home'
import { Contact } from '../layouts/public/Contact'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
