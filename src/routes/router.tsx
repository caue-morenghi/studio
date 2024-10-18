import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { App } from "../App"
import Teste from "../pages/Teste"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/teste',
                element: <Teste /> 
            }
        ]
    }
])