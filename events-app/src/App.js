import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify'
import './App.css'


function App() {

    // Dont Do This : fetchBooks()
    return (
        <div className='app'>
            <ToastContainer></ToastContainer>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;