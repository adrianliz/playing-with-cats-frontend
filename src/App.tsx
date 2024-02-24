interface QuestionBreed {
    id: string
    name: string
}

interface QuestionCat {
    id: string
    imageUrl: string
}

interface Question {
    id: string
    breeds: QuestionBreed[]
    cat: QuestionCat
}

const question: Question = {
    id: '1',
    breeds: [{
        id: 'per',
        name: 'Persian'
    }],
    cat: {
        id: '1',
        imageUrl: 'https://picsum.photos/200/300'
    }
}

export default function App() {
    return (
        <div className='container flex flex-col max-w-sm max-h m-auto h-screen'>
            <div className="flex justify-center items-center m-6 pb-2 border-b-2">
                <h1 className="m-2+4 text-4xl font-bold">
                    Playing with cats!
                </h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="m-8">
                    <img className="border-2 border-gray-300 p-1 object-contain rounded-lg"
                         src={question.cat.imageUrl}/>
                </div>
                <div className="flex flex-col items-center w-2/3">
                    <button type="button"
                            className="w-full m-2 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded">
                        Item 1
                    </button>
                    <button type="button"
                            className="w-full m-2 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded">
                        Item 2
                    </button>
                    <button type="button"
                            className="w-full m-2 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded">
                        Item 3
                    </button>
                </div>
            </div>
        </div>
    )
}
