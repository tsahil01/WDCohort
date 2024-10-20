import express from 'express'
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));


app.post('/submission', async (req, res) => {
    const { problemId, code, language } = req.body;
    console.log(`Received submission for problem ${problemId}`);
    try {
        await client.lPush("problems", JSON.stringify({ problemId, code, language }));
        res.status(200).send('Submission Received and stored in Redis');
    } catch (err) {
        res.status(500).send('Submission Failed');
    }
});

async function startServer(){
    try {
        await client.connect();
        console.log('Connected to Redis');
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } catch (err) {
        console.log('Error connecting to Redis', err);
    }
}

startServer();