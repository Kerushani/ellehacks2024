const PORT = 8000;
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
    res.json('hi')
})

// app.get('/google-maps', async (req, res) => {
//     try{
//         const apiKey = process.env.GOOGLE_API_KEY;
//         // const response = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=600x300&key=${encodedApiKey}`);
//         res.json(apiKey);
//     } catch (error){
//         res.status(500).json('Internal server error');
//     }
// })

app.get('/google-maps', (req, res) => {
  res.type('application/javascript');
  res.send(`window.env = ${JSON.stringify(process.env.REACT_APP_GOOGLE_API_KEY)};`);
});

app.listen(8000, () => console.log(`Server is running on port  ${PORT}`))