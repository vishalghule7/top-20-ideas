import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './Screens/Home/HomeScreen'
import { ThemeContext } from './context/ThemeContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddnewIdea from './Screens/NewIdea/AddnewIdea'


const router = createBrowserRouter([
  {
  path:'/',
  element: <HomeScreen/>
  },
  {
    path:"/new",
    element: <AddnewIdea/>
  }
])


function App() {

  const [theme, setTheme]= useState('');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="flex justify-center items-centre
     p-4 md:p-10 " data-theme={theme}>
        <div className=" max-w-3xl w-full ">
           <RouterProvider router={router}/>
        </div >
    </div>
    </ThemeContext.Provider>
  )
}

export default App
