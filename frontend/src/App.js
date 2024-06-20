import './App.css';
import React,{useState} from "react";
import { getCategories } from './fetcher';
import { Link } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []})

  React.useEffect(() => {
    const fetchData = async () =>{
      const data = await getCategories()
      setCategories(data)
    }
    
    fetchData()
    
  },[])



const renderCategories = () => {
  return categories.data.map((c) =>
    <li key={c.id}>
      <Link to={`categories/${c.id}`}>{c.title}</Link>
    </li>
  )
}
  return (
    <>
    <header>My Store</header>
    <section>
      <nav>
        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
        {categories && renderCategories()}
      
      </nav>
      <h1>Products</h1>
      
    </section>
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
