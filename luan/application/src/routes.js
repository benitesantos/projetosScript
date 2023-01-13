import {Routes, Route, Outlet, Navigate} from 'react-router-dom';
import Signin from './pages/Signin';
import Main from './pages/Main';
import Lists from './pages/Lists';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/lists' element={<Lists/>}/>
            <Route path='/main' element={<Main/>}/>
        </Routes>
    )
}

export default MainRoutes;