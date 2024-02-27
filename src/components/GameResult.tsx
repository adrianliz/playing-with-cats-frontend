import {CatBreed} from "../models/SolvedQuestion.ts";

export default function GameResult({failedBreed, secondsElapsed, hits, onPlayAgain}: {
    failedBreed: CatBreed,
    secondsElapsed: number,
    hits: number,
    onPlayAgain: () => void
}) {
    return (
        <div className="flex flex-col items-center">
            <p className="text text-lg border-2 border-solid border-black m-6 p-4">You got&nbsp;
                <b>{hits} hits</b> in <b>{secondsElapsed} seconds</b>
            </p>

            <p className="text-2xl mb-4 p-2">Sorry, but the breed was:</p>
            <p className="text-3xl font-bold mb-2">{failedBreed.name}</p>
            <p className="text italic p-2">Learn more about this breed&nbsp;
                <a href={failedBreed.infoUrl} target="_blank"
                   className="text-blue-600 underline">here</a>
            </p>

            <div className="mt-8 flex flex-col items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onPlayAgain}>
                    Try again
                </button>
            </div>
        </div>
    )
}
