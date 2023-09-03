import React from 'react'
import { Accordion } from 'react-bootstrap'
import data from '../data/accordionData';

const BsAccordion = () => {
  return (
    <div>
      <h1 className='text-center accordion-title'>accordion Header</h1>
      <Accordion className='m-5'>
        <AccordionItems/>
      </Accordion>
    </div>
  );
}

function AccordionItems() {
  return (
    <>
      {data.map(item => (
        <Accordion.Item key={item.id} eventKey={item.id} className='item'>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <div className='container'>
              <diV className='row align-items-center text-center'>
                <div className='col-12 col-md-6 accordion-contain-text'>
                  <p>{item.text}</p>
                </div>
                <div className='col-12 col-md-6 accordion-contain-img'>
                  <img className='accordion-img' src={item.img} alt={item.title}></img>
                </div>
              </diV>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </>
  );
}

export default BsAccordion;
