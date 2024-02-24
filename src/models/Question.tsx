export interface Question {
    id: string
    breeds: CatBreed[]
    cat: Cat
}

export interface CatBreed {
    id: string
    name: string
}

export interface Cat {
    id: string
    imageUrl: string
}
