import express from 'express';
import cors from 'cors';
import router from './route/index.js';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({ credentials: true, origin: '*' }));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
