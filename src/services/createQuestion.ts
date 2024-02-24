import {CatBreed} from "../models/Question.tsx";

export async function createQuestion() {
    const API_URL = import.meta.env.VITE_API_URL

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    return {
        id: data.id,
        breeds: data.breeds.map((breed: CatBreed) => {
            return {
                id: breed.id,
                name: breed.name
            }
        }),
        cat: {
            id: data.cat.id,
            imageUrl: data.cat.imageUrl
        }
    }
}
