import {QuestionStatus} from "./QuestionStatus.ts";

export interface SolvedQuestion {
    status: QuestionStatus;
    expectedBreed: CatBreed;
}

export interface CatBreed {
    name: string;
    infoUrl: string;
}
