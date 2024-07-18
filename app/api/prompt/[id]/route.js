import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET /prompt/:id
export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id);
        if (!prompt) {
            return new Response("Prompt not found", { status: 404 });
        }
        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response('Failed to fetch the prompt', { status: 500 });
    }
};
// PATCH /prompt/:id
export const PATCH = async (req, { params }) => {
    const {prompt, tag} = await req.json();

    try {
        await connectToDB();
        const existingPromt = await Prompt.findById(params.id);

        if(!existingPromt) {
            return new Response("Prompt not found", { status: 404 });
        };
        existingPromt.prompt = prompt;
        existingPromt.tag = tag;
        await existingPromt.save();

        return new Response(JSON.stringify(existingPromt), { status: 200 });
    } catch (error) {
        return new Response('Failed to update the prompts', { status: 500 });
    }
};
// DELETE /prompt/:id
export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id);


        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 });
    }
};