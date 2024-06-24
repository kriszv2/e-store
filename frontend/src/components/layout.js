import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css'
function Layout({categories}) {

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
     <h2>Categories</h2>
     {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
     {categories && renderCategories()}
   
   </nav>
   <Outlet/> 
 </section>
 <footer>footer</footer>
 </>
 )
}

export default Layout