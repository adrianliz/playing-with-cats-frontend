import {Question} from "./models/Question.tsx";
import QuestionCard from "./components/QuestionCard.tsx";

const question: Question = {
    id: '1',
    breeds: [
        {
            id: 'per',
            name: 'Persian'
        },
        {
            id: 'sia',
            name: 'Siamese'
        },
        {
            id: 'rag',
            name: 'Ragdoll'
        }
    ],
    cat: {
        id: '1',
        imageUrl: 'https://picsum.photos/200/300'
    }
}

export default function App() {
    return (
        <div className='container flex flex-col max-w-sm max-h m-auto h-screen'>
            <QuestionCard question={question}/>
        </div>
    )
}
