import React from 'react'

function Services () {
  const serviceData = [
    {
      id: 0,
      title: 'PCOS Management Program (3 months)',
      image:
        'https://images.unsplash.com/photo-1634463278803-f9f71890e67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 1500
    },
    {
      id: 1,
      title: 'BODY Transformation Program (3 months)',
      image:
        'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 1800
    },
    {
      id: 1,
      title: 'BODY Transformation Program (3 months)',
      image:
        'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      price: 18000
    },
  ]

  return (
    <div className='Services_main_conainer'>
      <h1 className='text'>Services / Packages</h1>
      <div className='services_parenet_container'>
        {serviceData.map((item, index) => {
          return (
            <>
              <div className='card'>
                <img
                  src= {item.image}
                  alt=''
                />
                <div className='card_bottom_container'>
                  <h3>{item.title}</h3>
                  <div className='card_nest_container'>
                    <p>Book a Spot</p>
                    <h5>Rs : {item.price}</h5>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Services
