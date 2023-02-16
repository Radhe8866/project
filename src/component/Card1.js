import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiLion } from 'react-icons/gi';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import Comp2 from './Comp2';
import '../css/comp2.css'


const Card1 = () => {
  return (
    <Container xl={12}>
      <Row>
        <Col>
          <div className='rt1'>
            <Col md="rt"><i className='img2' ><GiLion /></i></Col>
            <Col xs lg="2" className='rt1'>
              our promise to you
            </Col>
          </div>
          <div className='per'>
            <h3>sed perspiciatis omnis iste natus</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Comp2 src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" name="rohuit" />
        </Col>
        <Col lg={4}>
          <Comp2 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvOWSVFXQhiTz8en1z1gbxRBYBNxFwTGJNw&usqp=CAU" />
        </Col>
        <Col lg={4}>
          <Comp2 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpxmt91LKvAAx2lpocbd5zo4-lFP-CB02eo6e0TyelGLrbI10Gu7b8kz9C_zr6DhgIic&usqp=CAU" />
        </Col>
        <Col lg={4}>
          <Comp2 src="data:image/jpeg;base64,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" />
        </Col>
        <Col lg={4}>
          <Comp2 src="data:image/jpeg;base64,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" />
        </Col>
        <Col lg={4}>
          <Comp2 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU" />
        </Col>
      </Row>

      <Row>
        
      </Row>
      <div className='button3'>
        <Button variant="" className='color2' size="lg">
          learn more
        </Button>{' '}
      </div>
    </Container>
  )
}

export default Card1