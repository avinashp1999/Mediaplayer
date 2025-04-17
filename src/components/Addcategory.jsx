import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import form, { Row, Col } from 'react-bootstrap'
import { uploadCategory } from '../sevices/allApi';
import { ToastContainer, toast } from 'react-toastify';
import { addingCategory } from '../sevices/allApi';
import { deleteCategory } from '../sevices/allApi';
import { videoDetailsWithId } from '../sevices/allApi';
import Videocard from './Videocard';
import { updateCategories } from '../sevices/allApi';
import VideocardCategories from './VideocardCategories';


function Addcategory() {
    const [catDel,setCatDel]=useState(false)
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState()
    const [cat, setCat] = useState(false)
    const [del, setDel] = useState(false)
    const [videoData, setVideoData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState({
        id: '',
        cateName: '',
        addVideos: []
    })
    // console.log(category)

    const handleAddcategory = async () => {
        // console.log(category)
        const { id, cateName } = category
        if (!id || !cateName) {
            toast.warn("Please fill the form completely!");

        }
        else {
            const response = await uploadCategory(category)
            if (response.status == 201) {
                toast.success(`${response.data.cateName} successfully uploaded`)
                setCat(true);
                handleClose();
            }
        }


    }
    const addingAllCategory = async () => {
        const response = await addingCategory()
        const { data } = response

        console.log(data)
        setCategories(data)

    }

    useEffect(() => {
        addingAllCategory()
        setCat(false)
        setDel(false)
        setCatDel(false)
    }, [cat, del,catDel])

    // console.log('sss', categories);
    const deleteCat = async (id) => {
        deleteCategory(id)
        setDel(true)
    }
    const dragOver = (e) => {
        e.preventDefault();//to prevent default page refresh
        console.log("drag over====")

    }
    const videoDrop = async (e, id) => {
        console.log(`videoCard will be placed on category with id ${id}`);
        const videoID = e.dataTransfer.getData('videoId')
        console.log(`video with id ${videoID} will be dropped at category with id ${id}`);
        const response = await videoDetailsWithId(videoID)
        const { data } = response
        // console.log('sss',data);
        // setVideoData(data)
        // console.log(videoData);
        const selectedCategory = categories?.find((item) => item.id == id)
        console.log("selectedCategory", selectedCategory)
        selectedCategory.addVideos.push(data)
        console.log("selectedategory with dragged video details")
        console.log(selectedCategory)
        await updateCategories(id, selectedCategory)
       await addingAllCategory()



    }

    return (
        <>
            <div className='mt-3'>

                <div className='bg-warning border rounded align-items-center d-flex justify-content-evenly'>
                    <h6 onClick={handleShow}>Add New Category</h6>

                </div>
                <div className='d-grid ms-3  mt-4' style={{ width: '350px' }} >
                    {


                        categories?.map((item) => (

                            <div className=' m-2 border border-secondary rounded p-3' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
                                <div className=' d-flex justify-content-between align-items-center '>
                                    <h6>{item.cateName}</h6>
                                    <button className=' ms-2 btn btn-danger' onClick={() => { deleteCat(item.id) }}><i class="fa-solid fa-trash " ></i></button>


                                </div>
                                
                                <div>
                                {/* <Row> */}
                                    <Col sm={12} md={4} lg={4} xl={4} >
                                        {
                                            item.addVideos?.length > 0 ?
                                                item.addVideos.map(video => (<VideocardCategories displayVideo={video} categoryId={item.id} setCatDel={setCatDel}/>))
                                                :
                                                <p>No item</p>
                                        }
                                    </Col>
                                {/* </Row> */}

                                </div>
                               











                            </div>

                        ))}
                </div>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='text-warning'> <i class="fa-solid fa-pen"></i> Add New Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='border border-secondary p-3'>
                            <p>Please fill the following details</p>
                            <form action=""  >
                                <input type="text" placeholder='Enter Category id' className='form-control ' onChange={(e) => setCategory({ ...category, id: e.target.value })} />
                                <input type="text" placeholder='Enter Category Name' className='form-control mt-1' onChange={(e) => setCategory({ ...category, cateName: e.target.value })} />

                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="warning" onClick={handleAddcategory}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Addcategory