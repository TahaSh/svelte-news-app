import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import bodyParser from 'body-parser'

const FileStore = sessionFileStore(session)

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
    bodyParser.json(),
    session({
      secret: 'yoursessionsecretkey',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 43200000
      },
      store: new FileStore({
        path: '.sessions'
      })
    }),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
      session: req => ({
        user: req.session && req.session.user
      })
    })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
