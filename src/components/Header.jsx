import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigateByUrl=useNavigate()
  return (
    <>

<Navbar className="">
      <Container>
        <Navbar.Brand href="#home" style={{color:'white', fontSize:'30px'}} onClick={()=>{navigateByUrl('/')}}>
            <i class="fa-solid fa-video text-warning me-2"></i> Media Player</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  )
}

export default Header