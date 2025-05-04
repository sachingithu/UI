import React from 'react'
import './PackagingList.css'
const PackagingList = ({ props }) => {
  return (
    <div className='list'>
      <ul>
        {props.map(item => (
          <li key={item.id}>
            {item.quantity}
            {item.description}
            <button>🚫</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PackagingList