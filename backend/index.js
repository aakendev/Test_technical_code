import express from 'express';
import bilanganGanjilRoutes from './routes/bilanganganjil.route.js';
import bilanganPrimaRoutes from './routes/bilanganprima.route.js';
import segitigaAngkaRoutes from './routes/segitigaangka.route.js';

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
  res.json({ message: 'Success Connected to Backend' });
});

app.use('/api', bilanganGanjilRoutes);
app.use('/api', bilanganPrimaRoutes);
app.use('/api', segitigaAngkaRoutes);
