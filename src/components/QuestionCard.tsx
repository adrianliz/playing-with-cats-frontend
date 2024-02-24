import {Question} from "../models/Question.tsx";
import QuestionOption from "./QuestionOption.tsx";

export default function QuestionCard({question}: { question: Question }) {
    return (
        <>
            <div className="flex justify-center items-center m-6 pb-2 border-b-2">
                <h1 className="m-2+4 text-4xl font-bold">
                    Playing with cats!
                </h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="m-8">
                    <img className="border-2 border-gray-300 p-1 object-contain rounded-lg"
                         src={question.cat.imageUrl} alt="question-cat-image"/>
                </div>
                <div className="flex flex-col items-center w-2/3">
                    {question.breeds.map((breed) => (
                        <QuestionOption option={breed} key={breed.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}
