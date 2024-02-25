import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";

export default function Timer({secondsElapsed}: {secondsElapsed: number}) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-baseline text-2xl font-semibold">
                <FontAwesomeIcon className="text-sm mr-2" icon={faClock}/>
                <p>{secondsElapsed}s</p>
            </div>
        </div>
    )
}
