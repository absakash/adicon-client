import { RouterProvider } from "react-router-dom"
import router from "./router/router"
import { Toaster } from "react-hot-toast"


function App() {
 

  return (
    <div className="max-w-[1600px] mx-auto mt-1 shadow-xl rounded-3xl">
     <RouterProvider router={router}>
     </RouterProvider>
     <Toaster></Toaster>
    </div>
  )
}

export default App
