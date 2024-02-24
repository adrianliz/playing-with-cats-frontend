import QuestionCard from "./components/QuestionCard.tsx";
import useQuestion from "./hooks/useQuestion.tsx";
import {Answer} from "./models/Answer.tsx";
import useSolveQuestion from "./hooks/useSolveQuestion.tsx";
import {useEffect, useState} from "react";

export default function App() {
    const [answer, setAnswer] = useState<Answer | null | undefined>(null)
    const questionStatus = useSolveQuestion(answer)
    const {question, loading} = useQuestion(questionStatus)

    useEffect(() => {
        setAnswer(null)
        if (questionStatus === "SOLVED") {
            console.log("Question solved!")
        } else if (questionStatus === "FAILED") {
            console.log("Question failed!")
        }
    }, [questionStatus])

    function handleAnswer(answer: Answer) {
        setAnswer(answer)
    }

    return (
        <div className="container flex flex-col max-w-sm max-h m-auto h-screen">
            <div className="flex justify-center items-center m-6 pb-2 border-b-2">
                <h1 className="m-2+4 text-4xl font-bold">
                    Playing with cats!
                </h1>
            </div>
            {loading && <h1 className="m-auto text-center">Loading...</h1>}
            {question &&
                <QuestionCard question={question} handleAnswer={handleAnswer}/>}
        </div>
    )
}
