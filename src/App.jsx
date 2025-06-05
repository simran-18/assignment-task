import './App.css'
import DetailPage from './components/DetailPage'
import Header from './components/Header'
import ProductsPage from './components/ProductsPage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
function App() {
  return (
   <div>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="*" element={<ProductsPage/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
