import axios from 'axios';

const baseUrl = 'http://localhost:8585/';

function getCustomerById(id) {
    const url = baseUrl + "customers/bycustomerid/" + id;
    const promise = axios.get(url);
    return promise;
}

export { getCustomerById };