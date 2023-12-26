import { useSelector } from "react-redux"
import { languageTranslate } from "../utils/languageConstants"

function GptSearchBar(){
    const selectedLang=useSelector(state=>state.config.lang)
    return (
        <div className="flex justify-center">
        <form className="bg-black mt-28 w-[50%] gap-4 p-4 flex">
            <input type="text" className="w-[80%] p-2 rounded" placeholder={languageTranslate[selectedLang].searchTextFieldPlaceHolder} />
            <button className="bg-red-700 text-white rounded py-2 px-4">{languageTranslate[selectedLang].search}</button>
        </form>
        </div>
    )
}

export default GptSearchBar