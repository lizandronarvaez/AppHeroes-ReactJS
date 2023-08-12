import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/Login'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Footer from '../interface/components/Footer/Footer'

const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Login */}
                <Route path='login' element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter