import GptSearchBar from "../components/GptSearchBar"
import GptSuggestedList from "../components/GptSuggestedList"
import { bannerImage } from "../utils/constants"

function GptSearchPage(){
    return(
        <div>
            <img src={bannerImage} alt="Banner Image" className="fixed top-0 -z-10" />
            <GptSearchBar></GptSearchBar>
            <GptSuggestedList></GptSuggestedList>
        </div>
    )
}

export default GptSearchPage