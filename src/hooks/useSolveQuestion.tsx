import {Answer} from "../models/Answer.tsx";
import {QuestionStatus} from "../models/QuestionStatus.tsx";
import {useEffect, useState} from "react";

const API_URL = 'http://localhost:8080/questions'

async function solveQuestion(answer: Answer) {
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
    return data.status as QuestionStatus
}

export default function useSolveQuestion(answer: Answer | null | undefined) {
    const [questionStatus, setQuestionStatus] = useState<QuestionStatus>(QuestionStatus.UNKNOWN)

    useEffect(() => {
        if (!answer) {
            return
        }
        solveQuestion(answer).then(status => {
            setQuestionStatus(status)
        })
            .catch(e => {
                console.error("Error solving question", e)
                setQuestionStatus(QuestionStatus.UNKNOWN)
            })
    }, [answer])

    return questionStatus
}
