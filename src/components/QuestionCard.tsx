import {Question} from "../models/Question.tsx";
import QuestionOption from "./QuestionOption.tsx";
import {Answer} from "../models/Answer.tsx";

export default function QuestionCard({question, onAnswer}: {
    question: Question,
    onAnswer: (answer: Answer) => void
}) {

    function handleClic(e: React.MouseEvent<HTMLButtonElement>, breedId: string) {
        e.preventDefault()
        console.log("Clicked on: ", breedId)
        onAnswer({questionId: question.id, breedId: breedId})
    }

    return (
        <div className="flex flex-col items-center">
            <div className="m-8">
                <img className="border-2 border-gray-300 p-1 object-contain rounded-lg"
                     src={question.cat.imageUrl} alt="question-cat-image" loading="lazy"/>
            </div>
            <div className="flex flex-col items-center w-2/3">
                {question.breeds.map((breed) => (
                    <QuestionOption breed={breed} onClic={handleClic} key={breed.id}/>
                ))}
            </div>
        </div>
    )
}
