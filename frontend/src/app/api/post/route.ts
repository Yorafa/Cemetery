import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { BackendPath } from '../../../../config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.post(BackendPath + '/people', req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}