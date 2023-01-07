import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const postcontroller = async (req, res) => {

    const text = req.body;

    try {

        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "256x256"
        })

        const imageUrl = response.data.data[0].url;

        res.status(200).json({
            success: true,
            data: imageUrl
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Image Could not be Ganerated"
        })
    }


}

export default postcontroller;