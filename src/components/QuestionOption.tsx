import {CatBreed} from "../models/Question.tsx";

export default function QuestionOption({option}: { option: CatBreed }) {
    return (
        <button type="button"
                className="w-full m-2 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded">
            {option.name}
        </button>
    )
}
