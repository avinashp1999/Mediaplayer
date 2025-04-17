import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Addvideo from '../components/Addvideo'
import Allvideos from '../components/Allvideos'
import Addcategory from '../components/Addcategory'

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center'>
                <div>
                    <div className='addvideo'>
                        <Addvideo setUploadVideoStatus={setUploadVideoStatus} />
                    </div>
                    <div >
                        {/* className='container mt-5 mb-5 d-flex justify-content-between align-items-center' */}
                        <div className='all-videos col-md-6 mt-5'>
                            <h4>All videos</h4>
                            <Allvideos uploadVideoStatus={uploadVideoStatus} />

                        </div>

                    </div>
                </div>

                <div className='watchHistory'>
                    <Link to={'/history '} style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>Watch History</Link>
                    <div>
                        <Addcategory />
                    </div>
                </div>

            </div>

        

        </>
    )
}

export default Home