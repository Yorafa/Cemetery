export const dynamic = 'force-dynamic' // defaults to auto
import { BackendPath } from '../../../config';
import axios from 'axios';

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data);
    try {
        const response = await axios.post(BackendPath + '/people', data);
        return new Response(JSON.stringify(response.data), {
            status: 200,
        })
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify(error), {
            status: 500,
        })
    }
}