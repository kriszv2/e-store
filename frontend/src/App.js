import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import Category from './components/Category';
import { fetcher } from './fetcher';

function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  React.useEffect(() => {
    const fetchData = async () =>{
      const data = await fetcher("/categories")
      setCategories(data)
    }
    
    fetchData()
    
  },[])

  const onClickHandler = id =>{
   
    fetch("http://localhost:3001/products?catId=" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setProducts(data)
    })
  }
const renderProducts = () =>{
  return products.map(p => 
    <div>{p.title}</div>
  )
}
const renderCategories = () => {
  return categories.map(c =>
    <Category onCategoryClick={()=>onClickHandler(c.id)} key={c.id} id={c.id} title={c.title}/>
  )
}
  return (
    <>
    <header>My Store</header>
    <section>
      <nav>
        
        {categories && renderCategories()}
      
      </nav>
      <article>
        <h1>Products</h1>
        {products && renderProducts()}
      </article>
    </section>
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
