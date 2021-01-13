import { Client } from "@petfinder/petfinder-js";

const PET_FINDER_API = 'vbq4QHoITK3kNAO8olPVZfPNaes1WauFoFOmELQlwU9vk6SSmd'
const PET_FINDER_SECRET = 'MG5pFRNTSOC2HRvbSg1Z1yJWRYaO1Fpb6lnKjIkJ'

const client = new Client({
    apiKey: PET_FINDER_API, 
    secret: PET_FINDER_SECRET
});

export function getSearchData(breed, limit) {
    return client.animal.search({
        breed,
        limit
      }).then(response => response);
}