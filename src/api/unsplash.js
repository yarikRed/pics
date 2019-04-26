import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7a5b0b5c7e313274834816ec14c9198349f7faf3c46806331c360b81cdc34009'
    }
});
