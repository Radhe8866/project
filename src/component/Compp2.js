import { GiLion } from 'react-icons/gi';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import dog from '../img4.png'

import React from 'react'


const Compp2 = () => {
  return (
    <>
      <div className='container'>
        <div className='rt3'>
          {/* <img src="./img/img3.png" alt="" />s */}
          <div className='rbox'>
            <Col md="auto"><i className='img' ><GiLion /></i></Col>
            <Col xs lg="12" className='auto'>
              gallery & live stream
            </Col>
            <h3>check out our hard worker</h3>
            <Row >
              <Col className='d-flex'>
                <div>Galley</div>
                <div>live stream:Yard 1</div>
                <div>live stream:yard 2</div>
                <div>live stream:yard 3</div>

              </Col>
            </Row>
            <div className='r'>
            </div>

          </div>
          {/* <div className='box1'>
          <div className='sec2'>
            <img src={dog} />
          </div>
        </div> */}
        </div >
      </div>

    </>
  )
}

export default Compp2