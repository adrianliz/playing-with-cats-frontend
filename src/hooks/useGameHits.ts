import {useEffect, useState} from "react";
import {SolvedQuestion} from "../models/SolvedQuestion.ts";
import {QuestionStatus} from "../models/QuestionStatus.ts";

export default function useGameHits(solvedQuestion: SolvedQuestion | null) {
    const [hits, setHits] = useState(0)

    useEffect(() => {
        if (solvedQuestion?.status === QuestionStatus.SOLVED) {
            setHits(hits => hits + 1)
        }
    }, [solvedQuestion]);

    function reset() {
        setHits(0)
    }

    return {hits, resetHits: reset}
}
