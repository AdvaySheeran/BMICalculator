import express from 'express';
const app = express();
import getCalculatedData from './getCalculatedData.js';

app.use('/getCalculatedData', getCalculatedData);


app.listen(3000, () => console.log(`Server started on port 3000`));

