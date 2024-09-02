import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchResultPage from './views/searchResultsPage/searchResultPage'
import DetailsPage from './views/detailsPage/detailsPage'
import { getOneShowDetailsWithCast } from './api/searchSeries'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchResultPage />
  },
  {
    path: '/details/:showId',
    element: <DetailsPage />,
    loader: async ({ params }) => {
      return params.showId ? getOneShowDetailsWithCast(+params.showId) : null
    }
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
