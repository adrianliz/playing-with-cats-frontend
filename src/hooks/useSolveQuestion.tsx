import {Answer} from "../models/Answer.tsx";
import {useEffect, useState} from "react";
import {SolvedQuestion} from "../models/SolvedQuestion.tsx";
import {solveQuestion} from "../services/solveQuestion.ts";

export default function useSolveQuestion(answer: Answer | null | undefined) {
    const [solvedQuestion, setSolvedQuestion] = useState<SolvedQuestion>()

    useEffect(() => {
        if (answer == null) {
            setSolvedQuestion(undefined)
            return
        }
        solveQuestion(answer).then(solvedQuestion => {
            setSolvedQuestion(solvedQuestion)
        })
            .catch(e => {
                console.error("Error solving question", e)
                setSolvedQuestion(undefined)
            })
    }, [answer])

    return solvedQuestion
}
