import {Answer} from "../models/Answer.ts";
import {useEffect, useState} from "react";
import {solveQuestion} from "../services/solveQuestion.ts";
import {SolvedQuestion} from "../models/SolvedQuestion.ts";

export default function useSolveQuestion() {
    const [solvedQuestion, setSolvedQuestion] = useState<SolvedQuestion | null>(null)
    const [answer, setAnswer] = useState<Answer | null>(null)

    useEffect(() => {
        if (!answer) {
            setSolvedQuestion(null)
            return
        }
        solveQuestion(answer).then(solvedQuestion => {
            setSolvedQuestion(solvedQuestion)
        })
            .catch(e => {
                console.error("Error when calling solveQuestion", e)
                setSolvedQuestion(null)
            })
    }, [answer])

    return {solvedQuestion, setAnswer}
}
