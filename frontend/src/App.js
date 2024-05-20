import './App.css';
import React,{useState} from "react";
import Category from './components/category';
import { getProducts, getCategories } from './fetcher';
import Category_Products from './components/category_products';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []})
  const [products, setProducts] = useState({errorMessage: '', data: []})

  React.useEffect(() => {
    const fetchData = async () =>{
      const data = await getCategories()
      setCategories(data)
    }
    
    fetchData()
    
  },[])

  const onClickHandler = id =>{
   const fetchData = async () =>{
    const data = await getProducts(id)
    setProducts(data)
   }
        
    fetchData()
  }
const renderProducts = () =>{
  return products.data.map(p => 
    <Category_Products key={p.id} id={p.id} title={p.title}/>
  )
}
const renderCategories = () => {
  return categories.data.map(c =>
    <Category onCategoryClick={()=>onClickHandler(c.id)} key={c.id} id={c.id} title={c.title}/>
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
      <article className='category-product-info-article'>
        
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
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
