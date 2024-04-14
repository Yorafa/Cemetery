export const dynamic = 'force-dynamic' // defaults to auto
import axios from 'axios';
import { BackendPath } from '../../../../config';
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const response = await axios.get(`${BackendPath}/people/${id}`);
    return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}