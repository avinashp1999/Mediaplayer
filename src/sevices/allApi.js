import commonApi from './commonAPIs'
import serverurl from './serverurl'
// upload videos into the db
const uploadVideo= async (reqBody)=>{
  return await  commonApi('POST',`${serverurl}video`,reqBody)

}
export default uploadVideo
// retrieve video from db
 export const addVideo=async()=>{
return await commonApi('GET',`${serverurl}video`,'')
  // console.log(response)

}
// delete a video 
export const deleteVideo=async(id)=>{
  return await commonApi('DELETE',`${serverurl}video/${id}`,{})

}
// add to watch history
export const addHistory=async(reqBody)=>{
  return await commonApi('POST',`${serverurl}history`,reqBody)
}
// addding to the table
export const  getHistory=async()=>{
  return await commonApi('GET',`${serverurl}history`,'')
}
// deleting history
export const deleteHistory=async (id)=>{
  return await commonApi('DELETE',`${serverurl}history/${id}`,{})
}
// uploading category
export const uploadCategory=async (reqBody)=>{
  console.log(reqBody);
  
  
  return await commonApi('POST',`${serverurl}category`,reqBody)
}
// adding category
export const addingCategory=async ()=>{
  return await commonApi('GET',`${serverurl}category`,'')
}
// Deleting category
export const deleteCategory=async (id)=>{
  return await commonApi('DELETE',`${serverurl}category/${id}`,{})
}
// GET videodetails with specific video id
export const videoDetailsWithId=async (id)=>{
  return await commonApi('GET',`${serverurl}video/${id}`,"")
}
// update category with video details
export const updateCategories=async (id,body)=>{
  return await commonApi('PUT',`${serverurl}category/${id}`,body)

}
// export const removeVideoFromCategory=async (id,ID)=>{
//   return await commonApi('DELETE',`${serverurl}category/${id}/addVideos/${ID}`,{})
// }