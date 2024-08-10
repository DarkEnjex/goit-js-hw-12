import axios from "axios";

const API_KEY = '45360350-58fd54754bd8f677bef7c2cc3';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const limit = 15;

export async function searchImages(query, page) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        per_page: limit,
        page,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    try {
        const response = await axios.get(`?${searchParams}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch images');
    }
}
