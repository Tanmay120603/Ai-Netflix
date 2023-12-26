import GptSearchBar from "../components/GptSearchBar"
import { bannerImage } from "../utils/constants"

function GptSearchPage(){
    return(
        <div>
            <img src={bannerImage} alt="Banner Image" className="absolute -z-10" />
            <GptSearchBar></GptSearchBar>
        </div>
    )
}

export default GptSearchPage