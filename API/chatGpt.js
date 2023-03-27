import { Configuration,OpenAIApi } from "openai";
import dotenv from "dotenv"

dotenv.config({path: '.env'})

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});



const callChat = async(msg ='')=>{
    try {
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: msg,
        });
        console.log(completion.data.choices[0].text);    
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

export {
    callChat
}