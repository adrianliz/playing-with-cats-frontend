import {Answer} from "../models/Answer.tsx";

export async function solveQuestion(answer: Answer) {
    const API_URL = import.meta.env.VITE_API_URL

    await fetch(`${API_URL}/${answer.questionId}/solve`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            breedId: answer.breedId
        })
    })

    const response = await fetch(`${API_URL}/${answer.questionId}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    return {
        status: data.status,
        expectedBreedName: data.expectedBreedName
    }
}
