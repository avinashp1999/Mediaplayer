import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import form from 'react-bootstrap'
import uploadVideo from '../sevices/allApi';
import { ToastContainer, toast } from 'react-toastify';

function Addvideo({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [upload, setUpload] = useState({
    id: "",
    caption: '',
    img_url: '',
    link: ''

  })
  const handleUpload = async () => {
    const { id, caption, img_url, link } = upload;
    console.log(upload)
    if (!id || !caption || !img_url || !link) {
      toast.warn("Please fill the form completely!");
      // alert('fill the form completely')
    }
    else {
      const response = await uploadVideo(upload)
      if (response.status == 201) {
        toast.success(`${response.data.caption} successfully uploaded`)
        // alert()
        setUploadVideoStatus(response.data)
        handleClose();
      }
      else {
        toast.error("Something went wrong!")
      }

    }
  }


console.log(upload)



return (
  <>
    <div>
      <h5 onClick={handleShow}>Upload New Video
        <i class="fa-solid fa-cloud-arrow-up ms-2"></i>
      </h5>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <i class="fa-solid fa-film"></i> Upload video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-secondary p-3'>
            <p>Please fill the following details</p>
            <form action=""  >
              <input type="text" placeholder='Enter video id' className='form-control ' onChange={(e) => setUpload({ ...upload, id: e.target.value })} />
              <input type="text" placeholder='Enter video caption' className='form-control mt-1' onChange={(e) => setUpload({ ...upload, caption: e.target.value })} />
              <input type="text" placeholder='Enter video image url' className='form-control mt-1' onChange={(e) => setUpload({ ...upload, img_url: e.target.value })} />
              <input type="text" placeholder='Enter video youtube link' className='form-control mt-1'
                onChange={(e) => {
                  const data = e.target.value
                  const key = data.slice(-11)
                  const link = `https://www.youtube.com/embed/${key}`
                  console.log(key)
                  setUpload({ ...upload, link: link })

                }} />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    <ToastContainer position='top-center' autoClose={2000} />
  </>
)
}

export default Addvideo