import {useEffect, useState} from "react";
import {Question} from "../models/Question.tsx";
import {createQuestion} from "../services/createQuestion.ts";
import {SolvedQuestion} from "../models/SolvedQuestion.tsx";
import {QuestionStatus} from "../models/QuestionStatus.tsx";

export default function useCreateQuestion(solvedQuestion: SolvedQuestion | null | undefined) {
    const [question, setQuestion] = useState<Question>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (solvedQuestion?.status == QuestionStatus.FAILED) {
            setQuestion(undefined)
            setLoading(false)
            return
        }
        setLoading(true)
        setQuestion(undefined)
        createQuestion().then(question => {
            setQuestion(question)
        }).catch(e => {
            console.error("Error creating question", e)
        }).finally(() => setLoading(false))
    }, [solvedQuestion])

    return {question, loading}
}
