import {Answer} from "../models/Answer.ts";
import {useEffect, useState} from "react";
import {solveQuestion} from "../services/solveQuestion.ts";
import {GameResult} from "../models/GameResult.ts";
import {QuestionStatus} from "../models/QuestionStatus.ts";

export default function useGameResult(answer: Answer | null | undefined, secondsElapsed: number) {
    const [gameResult, setGameResult] = useState<GameResult>()
    const [hits, setHits] = useState(0)

    useEffect(() => {
        if (answer == null) {
            setGameResult(undefined)
            setHits(0)
            return
        }
        solveQuestion(answer).then(solvedQuestion => {
            if (solvedQuestion.status == QuestionStatus.SOLVED) {
                setHits(hits => hits + 1)
            }
            setGameResult({solvedQuestion, hits, secondsElapsed})
        })
            .catch(e => {
                console.error("Error when calling solveQuestion", e)
                setGameResult(undefined)
            })
    }, [answer])

    return gameResult
}
