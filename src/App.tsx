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
    path: '/details/:seriesId',
    element: <DetailsPage />,
    loader: async ({ request, params }) => {
      if (params.id) {
        getOneShowDetailsWithCast(+params.id)
      }
    }
  }
  //   {
  //   // it renders this element
  //   element: <Team />,

  //   // when the URL matches this segment
  //   path: "teams/:teamId",

  //   // with this data loaded before rendering
  //   loader: async ({ request, params }) => {
  //     return fetch(
  //       `/fake/api/teams/${params.teamId}.json`,
  //       { signal: request.signal }
  //     );
  //   },

  //   // performing this mutation when data is submitted to it
  //   action: async ({ request }) => {
  //     return updateFakeTeam(await request.formData());
  //   },

  //   // and renders this element in case something went wrong
  //   errorElement: <ErrorBoundary />,
  // },

  // access loaded data in component with useLoaderData. Example: https://medium.com/@bobjunior542/master-the-react-router-6-useloaderdata-hook-a-comprehensive-guide-38eca47eaf25
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
