import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import Addvideo from './Addvideo'
import { addVideo } from '../sevices/allApi'

function Allvideos({ uploadVideoStatus }) {
  const [video, setvideo] = useState([])
  const [deleteStatus,setDeleteStatus]=useState([])

  const importvideo = async () => {

    const response = await addVideo()
    // console.log(response.data)
    setvideo(response.data)
    // console.log('1.....,',response)
    // console.log(' 2....' ,response.data)
    // console.log(`this is data ${need}`)
    // setvideo(data)

    // try {
    //   const response = await addVideo();
    //   // console.log(response); // Check the structure of the response
    //   const { data } = response;

    //   console.log(data); // Verify the data
    //   setvideos(data); // Update state
    // } catch (error) {
    //   console.error("Error fetching videos:", error);
    // }
  };
  useEffect(() => {
    importvideo()
    // console.log(videos)
  }, [uploadVideoStatus,deleteStatus])
  // useEffect(() => {
  //   // importvideo()
  //   console.log(videos)
  // }, [videos])
  return (
    <>
      
        <Row className=' ms-4 me-5'>

        {video.length > 0 ?
            video.map((vid) => (


              <Col sm={12} md={4} lg={4} xl={4} className='ms-4 me-4 mt-2 mb-2'>
                <Videocard displayVideo={vid} setDeleteStatus={setDeleteStatus} />
              </Col>



            )

            )
            :
            <p>nothing to display</p>
          }
       

        </Row>

          












      
    </>
  )
}

export default Allvideos