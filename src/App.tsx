import useCreateQuestion from "./hooks/useCreateQuestion.tsx";
import {Answer} from "./models/Answer.tsx";
import useSolveQuestion from "./hooks/useSolveQuestion.tsx";
import {useState} from "react";
import {QuestionStatus} from "./models/QuestionStatus.tsx";
import GameResultCard from "./components/GameResultCard.tsx";
import QuestionCard from "./components/QuestionCard.tsx";

export default function App() {
    const [answer, setAnswer] = useState<Answer | null | undefined>(null)
    const solvedQuestion = useSolveQuestion(answer)
    const {question, loading} = useCreateQuestion(solvedQuestion)

    function handleAnswer(answer: Answer) {
        setAnswer(answer)
    }

    function handlePlayAgain() {
        setAnswer(null)
    }

    return (
        <div className="container flex flex-col max-w-sm max-h m-auto h-screen">
            <div className="flex justify-center items-center m-6 pb-2 border-b-2">
                <h1 className="m-2+4 text-4xl font-bold">
                    Playing with cats!
                </h1>
            </div>
            {loading && <h1 className="m-auto text-center">Loading...</h1>}
            {solvedQuestion?.status == QuestionStatus.FAILED &&
                <GameResultCard expectedBreed={solvedQuestion.expectedBreed} onPlayAgain={handlePlayAgain}/>}
            {question && <QuestionCard question={question} onAnswer={handleAnswer}/>
            }
        </div>
    )
}
