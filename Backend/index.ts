import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as uuid from 'uuid';

export class Server {
    public app: express.Express;
    public serverName = "Server";
    public tokens: string[] = [];
    public users: any = [];
    public scoreBoard: any = [];

    constructor() {
        this.scoreBoard.push(
            {
                name: 'Dilber',
                score: '10'
            }
        )

        let setpermission = function (req: any, res: any, next: any) {

            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        }

        this.users.push({ username: 'bellie', password: 'esh123' });

        // initialize the express js app
        this.app = express();

        // register central logging
        this.app.use(this.logMiddleware.bind(this));

        // add the processing of json payload
        this.app.use([bodyParser.json()])

        // offer the angular page
        this.app.use(express.static(path.join(__dirname, "../frontend/dist/Breakout")));  // http://expressjs.com/en/starter/static-files.html

        this.app.options('/signin', setpermission, (req, res) => {
            res.end('results');
        });

        this.app.options('/', function (req, res) {
            res.end('results');
        });

        this.app.options('/register', setpermission, (req, res) => {
            res.end('results');
        });

        this.app.options('/scoreboard', setpermission, (req, res) => {
            res.end('results');
        });

        this.app.options('/score', setpermission, (req, res) => {
            res.end('results');
        });

        this.app.options('/game', setpermission, (req, res) => {
            res.end('results');
        });

        // make a signin endpoint with
        // - credential check
        // - logging // TODO: #GDPR :-)
        // - generate token
        // - store tokens (further improvement: expire-time)
        this.app.post('/signin', setpermission, (req, res) => {
            
            if (this.userExists(req)) {

                let newToken = uuid() as string;
                this.tokens.push(newToken);

                res.status(200).json({ Token: newToken });
            } else {
                res.status(200).json({ Token: false });
            }
        });

        this.app.post('/register', setpermission, (req, res) => {
            if (this.userExists(req)) {
                res.status(200).json({ status: false });
            }
            else {
                this.users.push({ username: req.body.username, password: req.body.password }); 
                res.status(200).json({ status: true });
            }

        });


        this.app.post('/score', setpermission, (req, res) => {
            console.log('whole body is: ' + req.body);

            console.log('score send by user: ' + req.body.name + 'are  ' + req.body.score);
            if (this.userExists) {
                console.log('  auth: ' + req.header('Authorization'));

                this.handleScore(req.body.name, req.body.score)
                res.status(200);
            } else {
                res.status(403).json({ reason: 'wrong credentials' });
            }
        });

        this.app.get('/game', setpermission, (req, res) => {
            if (this.userExists) {
                console.log('Game is served');
                res.status(200);
            } else {
                res.status(403).json({ reason: 'wrong credentials' });
            }
        });




        this.app.get('/', function (req, res) {
            res.render('index', {});
        });



        // make a data endpoint with
        // - Auth check
        // - logging
        this.app.get('/data', setpermission, (req, res) => {
            let curToken = req.header('Authorization');
            console.log('  auth: ' + curToken);
            if (this.tokens.indexOf(curToken) === -1) {
                // https://http.cat/401
                res.status(401).json({ reason: 'not logged in' });
                console.log('  do not return data');
            } else {
                res.status(200).json(['img1', 'img2', 'img3']);
                console.log('  data returned properly');
            }
        });

        this.app.post('/scoreboard', setpermission, (req, res) => {

            let curToken = req.header('Authorization');
            console.log('  auth: ' + curToken);
            if (this.tokens.indexOf(curToken) === -1) {
                res.status(401).json({ reason: 'not logged in' });
                console.log('  do not return data');
            } else {
                res.status(200).json(this.scoreBoard);
                console.log('score returned properly');
            }
        });


        // start the server on port 3000
        this.app.listen(3000, '0.0.0.0', () => console.log('started at http://localhost:3000/'));
    }

    handleScore(name: string, score: string) {
        this.scoreBoard.push({ name: name, score: score.toString() });
        this.scoreBoard.sort((a: any, b: any) => {
            if (parseInt(a.score) > parseInt(b.score)) {
                return -1;
            }
            if (parseInt(a.score) < b.score) {
                return 1;
            }

            return 0;
        });

        console.log(this.scoreBoard);
        if (this.scoreBoard.length > 10) {
            this.scoreBoard.splice(10, 1);
        }
    }

    compare(a: number, b: number) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }

        return 0;
    }

    private userExists(req: any): boolean {

      
        
     
        for (let i = 0; i < this.users.length; i++) {
             
            if (this.users[i].username === req.body.username && this.users[i].password === req.body.password) {
                return true;
            }
        }
        return false;
    }

    private logMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(this.serverName + ': ' + req.url);
        next();
    }
}

// create the server
new Server();