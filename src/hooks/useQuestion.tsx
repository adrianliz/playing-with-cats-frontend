import {useEffect, useState} from "react";
import {CatBreed, Question} from "../models/Question.tsx";
import {QuestionStatus} from "../models/QuestionStatus.tsx";

const API_URL = 'http://localhost:8080/questions'

async function getQuestion() {
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

export default function useQuestion(questionStatus: QuestionStatus) {
    const [question, setQuestion] = useState<Question>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (questionStatus === QuestionStatus.FAILED) {
            setLoading(false)
            setQuestion(undefined)
            return
        }
        getQuestion().then(data => {
            setQuestion(data)
        })
            .catch(e => console.error("Error fetching question", e))
            .finally(() => setLoading(false))
    }, [questionStatus])

    return {question, loading}
}
