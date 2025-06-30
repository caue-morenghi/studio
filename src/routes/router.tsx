import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { App } from "../App"
import { Estrutura } from "../pages/Estrutura"
import { Precos } from "../pages/Precos"

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
                path: '/estrutura',
                element: <Estrutura />
            },
            {
                path: '/precos',
                element: <Precos />
            }
            // {
            //     path: '/teste',
            //     element: <Teste />
            // }
        ]
    },
])