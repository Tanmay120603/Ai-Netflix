import GptSearchBar from "../Gpt-Page-Components/GptSearchBar"
import GptSuggestedList from "../Gpt-Page-Components/GptSuggestedList"
import { bannerImage } from "../utils/constants"

function GptSearchPage(){
    return(
        <div>
            <img src={bannerImage} alt="Banner Image" className="fixed h-screen w-screen object-cover top-0 -z-10" />
            <GptSearchBar></GptSearchBar>
            <GptSuggestedList></GptSuggestedList>
        </div>
    )
}

export default GptSearchPage