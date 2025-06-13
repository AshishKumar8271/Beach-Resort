import React from 'react';
import { ServicesInfo } from './links';

const Services = () => {
  return (
    <section className="services">
      <h1 className='font-bold'>Services</h1>
      <div className="underline"></div>
      <div className="section-data">
        {
          ServicesInfo.map((ele) => {
            const { id, title, icon, info } = ele;
            return (
              <div className="service" key={id}>
                <span className='flex justify-center'>{icon}</span>
                <h3 className='font-bold text-xl'>{title}</h3>
                <p>{info}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services
