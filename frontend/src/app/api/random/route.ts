import axios from 'axios'
import { BackendPath } from '../../../../config';
export async function GET() {
    const response = await axios.get(BackendPath + '/people/random');
    return Response.json(response.data);
}