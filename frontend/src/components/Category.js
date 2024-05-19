import React from 'react'

const Category = ({id, onCategoryClick, title}) => {
  return (
    <div key={id} onClick={()=>onCategoryClick(id)}>{title}</div>
  )
}

export default Category