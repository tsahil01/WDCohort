import express from 'express';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client = createClient();

client.on('error', (e)=>{
    console.log('Redis Client Error: ', e);
});

async function startServer() {
    try {
        await client.connect();
        console.log('Connected to Redis Server');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }
    catch (e) {
        console.log('Error starting server: ', e);
    }
}

startServer();

app.post('/submit', async (req, res)=>{
    const { problemId, userId, code, language } = req.body;
    // push data to database using prisma

    // push data to redis
    try {
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}));
        res.json({
            message: 'Submission received'
        });
    } catch (e) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})