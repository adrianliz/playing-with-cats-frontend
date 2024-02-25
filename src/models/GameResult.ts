import {SolvedQuestion} from "./SolvedQuestion.ts";

export interface GameResult {
    solvedQuestion: SolvedQuestion;
    hits: number;
    secondsElapsed: number;
}
