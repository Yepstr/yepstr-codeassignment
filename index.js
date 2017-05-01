import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import appEntrance from './src/server/routes/app';
import appAPI from './src/server/routes/api';

const DEFAULT_PORT = 3000;

const app = express();

// database connection
require('./src/server/dbconfig');

const publicPath = path.join(__dirname, 'public');
app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

app.use('/public', express.static(publicPath));
app.use('/', appEntrance);
// api
app.use('/api', appAPI);





app.set('port', process.env.PORT || DEFAULT_PORT);

function runner() {
  console.log('The main server is running at http://localhost:' + this.address().port);
}
app.listen(app.get('port'), runner);
