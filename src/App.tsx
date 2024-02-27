import useCreateQuestion from "./hooks/useCreateQuestion.ts";
import {Answer} from "./models/Answer.ts";
import useSolveQuestion from "./hooks/useSolveQuestion.ts";
import GameResult from "./components/GameResult.tsx";
import QuestionCard from "./components/QuestionCard.tsx";
import Timer from "./components/Timer.tsx";
import {faCat} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useTimer from "./hooks/useTimer.ts";
import {QuestionStatus} from "./models/QuestionStatus.ts";
import useGameHits from "./hooks/useGameHits.ts";
import Footer from "./components/Footer.tsx";
import Loader from "./components/Loader.tsx";

export default function App() {
    const {solvedQuestion, setAnswer} = useSolveQuestion()
    const {question, loadingQuestion} = useCreateQuestion(solvedQuestion)
    const {secondsElapsed, resetTimer} = useTimer(solvedQuestion)
    const {hits, resetHits} = useGameHits(solvedQuestion)

    function handleAnswer(answer: Answer) {
        setAnswer(answer)
    }

    function handlePlayAgain() {
        setAnswer(null)
        resetTimer()
        resetHits()
    }

    return (
        <div className="container flex flex-col max-w-sm max-h m-auto h-screen">
            <div className="flex justify-center items-center m-6 pb-2 border-b-2">
                <FontAwesomeIcon className="text-4xl mr-4" icon={faCat}/>
                <h1 className="text-3xl text-bold">Playing with cats!</h1>
            </div>
            {solvedQuestion?.status != QuestionStatus.FAILED &&
                <Timer secondsElapsed={secondsElapsed}/>}
            {loadingQuestion && <Loader/>}
            {solvedQuestion?.status == QuestionStatus.FAILED &&
                <GameResult failedBreed={solvedQuestion.expectedBreed}
                            secondsElapsed={secondsElapsed}
                            hits={hits}
                            onPlayAgain={handlePlayAgain}/>}
            {question &&
                <QuestionCard question={question} onAnswer={handleAnswer}/>}
            {!loadingQuestion && <Footer/>}
        </div>
    )
}
