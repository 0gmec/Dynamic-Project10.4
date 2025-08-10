import BlogList from './components/BlogList'
import {Routes, Route} from "react-router-dom"

import './App.css'
import BlogItem from './components/BlogItem'

function App() {
  

  return (
    <>
    <div>
      <nav>
        <ul>
          <li><Link to ="/blog"></Link></li>
          <li><Link to ="/blogs/:slug"></Link></li>
        </ul>
      </nav>

    
    
      <Routes>
        <Route path="/blogs" element={<BlogList/>}/>
        <Route path="/blogs/:slug" element={<BlogItem/>}/>
      </Routes>




      </div>
    
     
    </>
  )
}

export default App
