import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//get a list of 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is fifth joke'
        }
    ];
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});