import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='footer d-flex justify-content-evenly mb-5 '>
                <div className='w-25'>
                    <h4><i class="fa-solid fa-video text-warning me-2"></i>Media player</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis laudantium autem culpa qui quos optio labore, quod fuga tenetur facilis unde inventore rem magnam eum molestias porro odio et!</p>
                </div>
                <div>

                    <h4>Links</h4>
                    <Link style={{textDecoration:'none',color:'white'}} to={ '/'}>
                        <h6>Landing Page</h6>

                    </Link>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/home' }>
                        <h6>Home</h6>

                    </Link>
                    <Link style={{textDecoration:'none',color:'white' }} to={'/history' }>
                        <h6>Watch History</h6>

                    </Link>
                </div>
                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>React Bootstrap</h6>
                    <h6>Bootswatch</h6>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <div className='d-flex'>
                        <input type="text" placeholder='Enter your Email' className='form-control' />
                        <button className='ms-2  btn btn-warning rounded'>subscribe</button>
                    </div>

                    <div className='d-flex justify-content-evenly mt-4'>
                        <i class="fa-brands fa-instagram fa-xl"></i>
                        <i class="fa-brands fa-x-twitter fa-xl"></i>
                        <i class="fa-brands fa-linkedin fa-xl"></i>
                        <i class="fa-brands fa-facebook-f fa-xl"></i>

                    </div>

                </div>

            </div>
            <div className='text-center'>
                <p> 	copyright &#169;2023.Media player built with React</p>
            </div>
        </div>
    )
}

export default Footer