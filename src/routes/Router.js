import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import SingUpPage from "../Pages/SingUpPage/SingUpPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import {NotFoundPage} from "../Pages/NotFoundPage/NotFoundPage"
import CreateRecipePage from "../Pages/CreateRecipePage/CreateRecipePage"
import DetailsPage from '../Pages/DetailsPage/DetailsPage'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/singup" element={<SingUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/recipe/:recipeId" element={<DetailsPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/recipe/new" element={<CreateRecipePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router