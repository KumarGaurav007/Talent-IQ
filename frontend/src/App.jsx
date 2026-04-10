import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProblemsPage from "./pages/ProblemsPage"
import { useUser } from "@clerk/clerk-react"
import toast, { Toaster } from "react-hot-toast"

function App() {
    const { isSignedIn } = useUser();

    return (
        <>
            <Toaster/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <HomePage />} />
            </Routes>

            
        </>
    )
}

export default App
