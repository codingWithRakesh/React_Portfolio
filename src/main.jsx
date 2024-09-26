import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Contact = lazy(() => import('./pages/Contact'))
const SkillDetails = lazy(() => import('./pages/SkillDetails.jsx'))
import Error from './pages/Error.jsx'
import UserContextProvider from './contexts/context.jsx'
import ModalContextProvider from './contexts/modalProvider.jsx'
import BorderContextProvider from './contexts/borderContext.jsx'
import ModeContextProvider from './contexts/modeChangeContext.jsx'
import FontContextProvider from './contexts/fontContext.jsx'
import CroseFontContextProvider from './contexts/croseFontContext.jsx'
import TopLoderProvider from './contexts/topLoderContext.jsx'
import SearchContextProvider from './contexts/searchContext.jsx'
import ShowDetailsContextProvider from './contexts/showDetailsContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/:skill',
        element: <SkillDetails />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/certificates',
        element: <Certificates />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShowDetailsContextProvider>
    <SearchContextProvider>
      <TopLoderProvider>
        <CroseFontContextProvider>
          <FontContextProvider>
            <ModeContextProvider>
              <BorderContextProvider>
                <ModalContextProvider>
                  <UserContextProvider>
                    <React.StrictMode>
                      <RouterProvider router={router} />
                    </React.StrictMode>
                  </UserContextProvider>
                </ModalContextProvider>
              </BorderContextProvider>
            </ModeContextProvider>
          </FontContextProvider>
        </CroseFontContextProvider>
      </TopLoderProvider>
    </SearchContextProvider>
  </ShowDetailsContextProvider>
)
