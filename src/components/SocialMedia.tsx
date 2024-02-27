import {TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from "react-share";

export default function SocialMedia({diffusionMessage}: { diffusionMessage: string }) {
    return (
        <div className="mt-8 flex flex-row items-center">
            <TwitterShareButton url={window.location.href}
                                title={diffusionMessage}
                                hashtags={["playingwithcats"]}>
                <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>

            <span className="mx-4"/>

            <WhatsappShareButton url={window.location.href}
                                 title={diffusionMessage + " #playingwithcats"}>
                <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
        </div>
    )
}
