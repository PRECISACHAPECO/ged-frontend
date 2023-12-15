import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
<<<<<<< HEAD
        ? 'http://localhost:3333/api/'
        : 'https://app.gedagro.com.br/api/'
=======
        ? process.env.NEXT_PUBLIC_BASE_URL
        : 'https://demo.gedagro.com.br/api/'
>>>>>>> 99283d6ce53c5e124a7346205b3376e4508686ed
});