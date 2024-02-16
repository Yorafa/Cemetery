import axios from 'axios'
import { BackendPath } from '../../../../config';

export async function POST(request:Request){
    const body = await request.json();
    const response = await axios.post(BackendPath + "/people", body);
    return Response.json(response.data);
}