import {useEffect, useState} from "react";
import {SolvedQuestion} from "../models/SolvedQuestion.ts";
import {QuestionStatus} from "../models/QuestionStatus.ts";

export default function useTimer(solvedQuestion: SolvedQuestion | null) {
    const [secondsElapsed, setSecondsElapsed] = useState(0)

    useEffect(() => {
        const clock = setInterval(() => {
            setSecondsElapsed(seconds => seconds + 1);
        }, 1000);

        if (solvedQuestion?.status == QuestionStatus.FAILED) {
            clearInterval(clock);
        }

        return () => clearInterval(clock);
    }, [solvedQuestion]);

    function reset() {
        setSecondsElapsed(0)
    }

    return {secondsElapsed, resetTimer: reset}
}
