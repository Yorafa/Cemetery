import axios from 'axios'
import { BackendPath } from '../../../../config';

export async function GET(request:Request, { params }: { params: { slug: string } }) {
    const slug = params.slug;
    const response = await axios.get(BackendPath + '/people/' + slug);
    return Response.json( response.data );
}