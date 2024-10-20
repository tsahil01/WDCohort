import { createClient } from "redis";
const client = createClient();


async function processSubmission(submission: string) {
    const { problemId, code, language } = JSON.parse(submission);

    console.log(`Processing submission for problemId ${problemId}...`);
    console.log(`Code: ${code}`);
    console.log(`Language: ${language}`);
    // Here you would add your actual processing logic

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}.`);
}

async function startWorker() {
    try {
        await client.connect();
        console.log("Worker connected to Redis.");

        while (true) {
            const submission = await client.brPop("problems", 0);
            console.log("Received submission", submission);
            await processSubmission(submission.element)
        }
    } catch (err) {
        console.log("Error connecting to Redis", err);
    }
}

startWorker();