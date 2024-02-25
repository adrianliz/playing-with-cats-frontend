import {QuestionStatus} from "./QuestionStatus.tsx";

export interface SolvedQuestion {
    status: QuestionStatus
    expectedBreed: CatBreed
}

export interface CatBreed {
    name: string
    infoUrl: string
}
