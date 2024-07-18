import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET /prompt/[id]
export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if (!prompt) {
            return new Response("Prompt not found", { status: 404 });
        }
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 });
    }
};


// PATCH /prompt/[id]
export const PATCH = async (req, { params }) => {
    const {prompt, tags} = await req.json();

    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 });
    }
};



export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 });
    }
};