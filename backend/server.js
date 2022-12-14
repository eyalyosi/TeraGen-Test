const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./services/logger.service');

const app = express();
const http = require('http').createServer(app);

app.use(express.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const reviewRoutes = require('./api/review/review.routes')

app.use('/api/review', reviewRoutes)

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3030;
http.listen(PORT, () => {
  logger.info(`Server is running on port: ${PORT}`);
});
