import axios from 'axios'
import { BackendPath } from '../../../../config';

export async function GET(request:Request){
    const {searchParams} = new URL(request.url);
    const name = searchParams.get('name');
    const response = await axios.get(BackendPath + '/people/' + name);
    const res = await response.json()
    return Response.json( {res});
}