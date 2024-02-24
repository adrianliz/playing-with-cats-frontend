import {CatBreed, Question} from "./models/Question.tsx";
import QuestionCard from "./components/QuestionCard.tsx";
import {useEffect, useState} from "react";

export const API_URL = 'http://localhost:8080/questions'

export default function App() {
    const [question, setQuestion] = useState<Question>()

    useEffect(() => {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setQuestion({
                    id: data.id,
                    breeds: data.breeds.map((breed: CatBreed) => {
                        return {
                            id: breed.id,
                            name: breed.name
                        }
                    }),
                    cat: {
                        id: data.cat.id,
                        imageUrl: data.cat.imageUrl
                    }
                })
            })
    }, [])

    return (
        <div className='container flex flex-col max-w-sm max-h m-auto h-screen'>
            {question && <QuestionCard question={question}/> }
        </div>
    )
}
