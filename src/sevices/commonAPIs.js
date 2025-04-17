// to create a instance of axios
import axios from 'axios'
const commonApi = async(httpMethod, url, reqBody) => {
    let reqConfig = {
        method: httpMethod,
        url: url,
        data: reqBody,
        Headers: {
            'Content-Type': 'application/json'
        }
    }
    return await axios(reqConfig)
        .then((results) => { return results })
        .catch((err) => { return err })

}
export default commonApi;
