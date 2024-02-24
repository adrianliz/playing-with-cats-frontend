import {CatBreed} from "../models/Question.tsx";

export default function QuestionOption({breed, handleClic}: { breed: CatBreed, handleClic: (event: React.MouseEvent<HTMLButtonElement>, breedId: string) => void }) {
    return (
        <button type="button"
                className="w-full m-2 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded"
                onClick={(e) => handleClic(e, breed.id)}>
            {breed.name}
        </button>
    )
}
