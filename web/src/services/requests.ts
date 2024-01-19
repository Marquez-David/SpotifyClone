import axios from "axios"
import { TOKEN_ENDPOINT, CLIENT_ID, CLIENT_SECRET } from "@/utils/constants"

export const getToken = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: TOKEN_ENDPOINT,
      data: new URLSearchParams({ 'grant_type': 'client_credentials' }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
      },
    })
    localStorage.setItem('token', response.data.access_token) //localStorage can only stora strings
    return response.data
  } catch (error) {
    console.log("Error while fetching: " + error.message);
  }
}