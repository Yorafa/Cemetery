import axios from 'axios';
import { BackendPath } from '../../../../config';
export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    const response = await axios.get(BackendPath + '/people/random');
    return new Response(JSON.stringify(response.data), {
        status: 200,
    })
}