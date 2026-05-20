import { Navigate, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProblemsPage from "./pages/ProblemsPage"
import { useUser } from "@clerk/clerk-react"
import DashboardPage from "./pages/DashboardPage";
import {Toaster} from "react-hot-toast"

function App() {
    const { isSignedIn, isLoaded } = useUser();

    if(!isLoaded) return null;

    return (
        <>
            <Toaster/>
            <Routes>
                <Route path="/" element={isSignedIn ? <Navigate to={"/dashboard"}/> : <HomePage />} />
                <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to={"/"}/>} />
                <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
            </Routes>

            
        </>
    )
}

export default App
