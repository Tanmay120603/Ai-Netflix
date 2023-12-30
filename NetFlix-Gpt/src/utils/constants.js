import OpenAi from "openai"
const logoImage="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
const bannerImage="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
const avatarImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
const apiOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU3M2U5MTRiYTE4ZmQ3NWVhOTk2MGVhYzk1NGUwZSIsInN1YiI6IjY1N2ViNjJiMTI0YzhkMDcyZDM5M2FhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GGvgXr_8PtsdT9UM8ZrnOuwokue98SSaU4xj2M-KvyU'
    }
};
const posterCdnLink="https://image.tmdb.org/t/p/w500"

const supportedLanguages=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"chinese",name:"Chinese"}]

const openAi=new OpenAi({
  apiKey:"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",
  dangerouslyAllowBrowser:true
})


export {logoImage,bannerImage,avatarImage,apiOptions,posterCdnLink,supportedLanguages,openAi}