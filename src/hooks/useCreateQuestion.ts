import {useEffect, useState} from "react";
import {Question} from "../models/Question.ts";
import {createQuestion} from "../services/createQuestion.ts";
import {SolvedQuestion} from "../models/SolvedQuestion.ts";
import {QuestionStatus} from "../models/QuestionStatus.ts";

export default function useCreateQuestion(solvedQuestion: SolvedQuestion | null) {
    const [question, setQuestion] = useState<Question | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (solvedQuestion?.status == QuestionStatus.FAILED) {
            setQuestion(null)
            setLoading(false)
            return
        }
        setLoading(true)
        setQuestion(null)
        createQuestion().then(question => {
            setQuestion(question)
        }).catch(e => {
            console.error("Error calling createQuestion", e)
        }).finally(() => setLoading(false))
    }, [solvedQuestion])

    return {question, loadingQuestion: loading}
}
