import React from 'react'

const recard = (props) => {
  return (
    <>
     <div className='box btn_shadow'>
      <div className='title_content d_flex'>
        <div className='title'>
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <div className='rate'>
          <button className='button_shadow'>{props.rate}</button>
        </div>
      </div>
      <hr />
      <p>{props.desc}</p>

     </div>
      
    </>
  )
}

export default recard
