import './App.css'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateCrew from './pages/CreateCrew'
import EditCrew from './pages/EditCrew'
import CrewGallery from './pages/CrewGallery'
import Home from './pages/Home'
import SideBar from './components/SideBar'

function App() {

  // set up routes
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/create',
      element: <CreateCrew />
    },
    {
      path: '/edit/:id',
      element: <EditCrew />
    },
    {
      path: '/gallery',
      element: <CrewGallery />
    },
  ]);


  return (
    <div className="App">
      <SideBar />
      {routes}
    </div>
  )
}

export default App
