import useCreateQuestion from "./hooks/useCreateQuestion.ts";
import {Answer} from "./models/Answer.ts";
import useGameResult from "./hooks/useGameResult.ts";
import {useEffect, useState} from "react";
import {QuestionStatus} from "./models/QuestionStatus.ts";
import GameResultCard from "./components/GameResultCard.tsx";
import QuestionCard from "./components/QuestionCard.tsx";
import Timer from "./components/Timer.tsx";
import {faCat} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function App() {
    const [answer, setAnswer] = useState<Answer | null | undefined>(null)
    const [secondsElapsed, setSecondsElapsed] = useState(0)
    const gameResult = useGameResult(answer, secondsElapsed)
    const {question, loading} = useCreateQuestion(gameResult)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsElapsed(seconds => seconds + 1);
        }, 1000);
        if (gameResult?.solvedQuestion.status == QuestionStatus.FAILED) {
            setSecondsElapsed(0)
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [setSecondsElapsed, gameResult]);

    function handleAnswer(answer: Answer) {
        setAnswer(answer)
    }

    function handlePlayAgain() {
        setAnswer(null)
    }

    return (
        <div className="container flex flex-col max-w-sm max-h m-auto h-screen">
            <div className="flex justify-center items-center m-6 pb-2 border-b-2">
                <FontAwesomeIcon className="text-4xl mr-4" icon={faCat}/>
                <h1 className="text-3xl text-bold">Playing with cats!</h1>
            </div>
            {gameResult?.solvedQuestion.status != QuestionStatus.FAILED &&
                <Timer secondsElapsed={secondsElapsed}/>}
            {loading && <h1 className="m-auto text-center">Loading...</h1>}
            {gameResult?.solvedQuestion.status == QuestionStatus.FAILED &&
                <GameResultCard gameResult={gameResult} onPlayAgain={handlePlayAgain}/>}
            {question &&
                <QuestionCard question={question} onAnswer={handleAnswer}/>}
        </div>
    )
}
