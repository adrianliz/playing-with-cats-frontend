export default function FailedQuestion({expectedBreedName}: { expectedBreedName: string }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl mb-4 p-2">Sorry, but the breed was:</p>
            <p className="text-3xl font-bold mb-2">{expectedBreedName}</p>
        </div>
    )
}
