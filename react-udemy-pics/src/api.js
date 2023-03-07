import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: 'Client-ID kuQuxRYK8rC3R0d-7rZZ5eUZVTAjQQvaYOpCgdtRyMM'
        },
        params:{
            query: term
        }
    })
    return response.data.results;
}

export default searchImages;