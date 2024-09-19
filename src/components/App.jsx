import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Home = () => <div>Home page</div>
const Contact = () => <div>Contact page</div>
const About = () => <div>About page</div>

const App = () => {
    return (
        <div>
            <Router>
                <ButtonAppBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App