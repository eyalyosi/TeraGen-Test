import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/review' : '//localhost:3030/api/review/'

export const reviewService = {
    query,
    remove,
    add,
};

async function query() {
    return axios.get(BASE_URL).then((res) => res.data)
}

async function remove(id) {
    return axios.delete(BASE_URL + id).then((res) => res.data)
}

async function add(review) {
    console.log(review);
    return axios.post(BASE_URL, review )
}

