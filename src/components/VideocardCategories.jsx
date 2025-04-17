
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteVideo } from '../sevices/allApi';
import { addHistory } from '../sevices/allApi';
import { getHistory } from '../sevices/allApi';
import { videoDetailsWithId } from '../sevices/allApi';
import { removeVideoFromCategory } from '../sevices/allApi';

function VideocardCategories({ displayVideo, categoryId ,setCatDel}) {
    console.log("idddd", categoryId);

    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        const { id, caption, link } = displayVideo;
        // const today = new Date;
        // const timeStamp = new Intl.DateTimeFormat('en-us', {
        //   year: '2-digit',
        //   month: '2-digit',
        //   hour: '2-digit',
        //   minute: '2-digit',
        //   second: '2-digit'

        // }).format(today)
        // let videoDetails = {
        //   id: id,
        //   caption: caption,
        //   link: link,
        //   timeStamp: timeStamp
        // }
        // await addHistory(videoDetails)
    }
    //   const removeVideoCategory = async (id,ID) => {
    //     const response = await removeVideoFromCategory(id,ID)
    //     console.log(response)
    //     // if (response.status == 200) {
    //     //   setDeleteStatus(response.data)


    //     // }




    //   }
    //   const dragStarted = async (e, id) => {
    //     console.log(`videoCard  with id ${id} started dragging`)

    //     e.dataTransfer.setData('videoId', id)



    //   }
    const deleteVideoFromCategory = async (categoryId, videoId) => {
        try {
            setCatDel(true) 
            console.log('category id is ',categoryId);
            console.log('video id is ',videoId);
            
            // First, get the category
            const response = await fetch(`http://localhost:5006/category/${categoryId}`);
            const category = await response.json();
            console.log(category);
            

            // Filter out the video to be deleted
            const updatedVideos = category.addVideos?.filter(video => video.id !== videoId);

            // Update the category with the new videos array
            const updateResponse = await fetch(`http://localhost:5006/category/${categoryId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    addVideos: updatedVideos
                })
            
            });

           
         return  await updateResponse.json();
        

         
        
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    }

    // Usage
    //   deleteVideo('1', '8'); // Deletes video with id 8 from category 1
    return (
        <>

            <Card style={{ width: '100%', height: '100%' }} /*draggable onDragStart={(e) => dragStarted(e, displayVideo.id)}*/>
                <Card.Img variant="top" src={displayVideo.img_url} onClick={handleShow} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <div>  <p>{displayVideo.caption}</p></div>
                        <div style={{
                            height: '30px', width: '30px'
                        }} className='bg-danger d-flex align-items-center justify-content-center'><i class="fa-solid fa-trash " onClick={() => { deleteVideoFromCategory(categoryId, displayVideo.id) }}></i></div>
                    </div>



                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>




            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{displayVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container' style={{ height: '600px', width: '100%' }} >
                        <iframe width="100%" height="100%" src={displayVideo.link} title="&quot;Asku Laska&quot; Nanban  Movie Songs | 2k Video | நண்பன் | Vijay, Ileana, Jiva, Srikanth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default VideocardCategories