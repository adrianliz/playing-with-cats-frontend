import {useEffect, useState} from "react";
import {Question} from "../models/Question.ts";
import {createQuestion} from "../services/createQuestion.ts";
import {QuestionStatus} from "../models/QuestionStatus.ts";
import {GameResult} from "../models/GameResult.ts";

export default function useCreateQuestion(gameResult: GameResult | null | undefined) {
    const [question, setQuestion] = useState<Question>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (gameResult?.solvedQuestion.status == QuestionStatus.FAILED) {
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
    }, [gameResult])

    return {question, loading}
}
