import express from 'express';

const app = express();
app.listen(4472, () => {
    console.log('Server is running on port 4472 from github actions.');
}); 

app.get('/', (req, res) => {
    res.json({ message: 'My fake API 2 github actions is running' })
});
