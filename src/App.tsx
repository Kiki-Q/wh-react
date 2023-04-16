import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom';
import Loading from './components/loading'
import router from './routers'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App
