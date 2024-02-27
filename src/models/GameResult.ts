import {SolvedQuestion} from "./SolvedQuestion.ts";

export class GameResult {
    readonly solvedQuestion: SolvedQuestion;
    readonly hits: number;
    readonly secondsElapsed: number;

    constructor(solvedQuestion: SolvedQuestion, hits: number, secondsElapsed: number) {
        this.solvedQuestion = solvedQuestion;
        this.hits = hits;
        this.secondsElapsed = secondsElapsed;
    }

    get failed(): boolean {
        return this.solvedQuestion.status === "FAILED";
    }

    get solved(): boolean {
        return this.solvedQuestion.status === "SOLVED";
    }
}
