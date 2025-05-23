import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

export const About = lazy(() => import('./pages/About'))
export const Skills = lazy(() => import('./pages/Skills'))
export const Projects = lazy(() => import('./pages/Projects'))
export const Certificates = lazy(() => import('./pages/Certificates'))
export const Contact = lazy(() => import('./pages/Contact'))
export const SkillDetails = lazy(() => import('./pages/SkillDetails.jsx'))
export const SearchResult = lazy(() => import('./pages/SearchResult.jsx'))

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
import ImageShowContextProvider from './contexts/imageContext.jsx';

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
      },
      {
        path: '/search',
        element: <SearchResult />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageShowContextProvider>
      <ShowDetailsContextProvider>
        <SearchContextProvider>
          <TopLoderProvider>
            <CroseFontContextProvider>
              <FontContextProvider>
                <ModeContextProvider>
                  <BorderContextProvider>
                    <ModalContextProvider>
                      <UserContextProvider>
                        <RouterProvider router={router} />
                      </UserContextProvider>
                    </ModalContextProvider>
                  </BorderContextProvider>
                </ModeContextProvider>
              </FontContextProvider>
            </CroseFontContextProvider>
          </TopLoderProvider>
        </SearchContextProvider>
      </ShowDetailsContextProvider>
    </ImageShowContextProvider>
  </React.StrictMode>
)
