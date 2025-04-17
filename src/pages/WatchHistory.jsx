import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../sevices/allApi'
import { deleteHistory } from '../sevices/allApi'

function WatchHistory() {
  const [history, setHistory] = useState()
  const [reHistory,setRehistory]=useState(false)
  const getAllHistory = async () => {
    const response = await getHistory()
    const data = await response.data
    setHistory(data)

  }
  console.log(history);
  const removeHistory=async(id)=>{
    await deleteHistory(id)
    setRehistory(true)
    


  }


  useEffect(() => {
    getAllHistory()
    setRehistory(false)
    

  }, [reHistory])



  return (
    <>
      <div className='container d-flex justify-content-between align-items-center '>
        <h4>Watch History</h4>
        <div>
          <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-arrow-left me-3"></i>Back to home</Link>
        </div>
      </div>
      <div>
        <table className='container table mt-5 mb-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {
              history?.length > 0 ?
                history.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.caption}</td>
                    <td>{item.link}</td>
                    <td> {item.timeStamp}</td>
                    <td>
                      <div style={{
                        height: '30px', width: '30px'
                      }} className='bg-danger d-flex align-items-center justify-content-center'><i class="fa-solid fa-trash " onClick={()=>removeHistory(item.id)}></i></div>
                    
                  </td>
            </tr>
          )): <p>No history found</p>
          }

        </tbody>






      </table>
    </div >
    </>
  )
}

export default WatchHistory