import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Html from './html';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        const html = ReactDOMServer.renderToStaticMarkup(
          <Html title="Yepstr" />
        );
        res.send('<!DOCTYPE html>' + html);
    });

// function App(request, response) {
//   const html = ReactDOMServer.renderToStaticMarkup(
//     <Html title="Yepstr" />
//   );
//   response.send('<!DOCTYPE html>' + html);
// }

module.exports = router;
