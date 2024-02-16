import axios from 'axios'
import { BackendPath } from '../../../../config';
export async function GET() {
    const response = await axios.get(BackendPath + '/people/random');
    const res = await response.json()
    return Response.json( {res});
}