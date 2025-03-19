import React from 'react'
import {Routes,Router} from 'react-router-dom'
import CreateBook from '../src/pages/CreateBooks'
import DeleteBooks from '../src/pages/DeleteBook'
import EditBook from '../src/pages/EditBook'
import Home from '../src/pages/Home'
import ShowBook from '../src/pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/books/create'element={<CreateBook />} />
      <Route path='/books/details/:id'element={<ShowBook />} />
      <Route path='/books/edit/:id'element={<EditBook />} />
      <Route path='/books/delete/:id'element={<DeleteBooks />} />
    </Routes>
  )
}

export default App