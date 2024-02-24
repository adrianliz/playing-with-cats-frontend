import QuestionCard from "./components/QuestionCard.tsx";
import useQuestion from "./hooks/useQuestion.tsx";

export default function App() {
    const {question, loading} = useQuestion()

    return (
        <div className="container flex flex-col max-w-sm max-h m-auto h-screen">
            {loading && <h1 className="m-auto text-center">Loading...</h1>}
            {question && <QuestionCard question={question} />}
        </div>
    )
}
