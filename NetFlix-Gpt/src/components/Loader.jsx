import {CirclesWithBar} from "react-loader-spinner"

function Loader(){
    return (
        <div className="w-[100%] h-[100%] mt-20 flex items-center justify-center">
            <CirclesWithBar color="red" wrapperClass="bg-black bg-opacity-80 flex justify-center items-center"></CirclesWithBar>
        </div>
    )
}

export default Loader