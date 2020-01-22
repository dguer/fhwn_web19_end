import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as uuid from 'uuid';

// https://medium.com/@Pierre_anthill/typescript-expressjs-api-with-webpack-4655126d884b 

export class Server {
    public app: express.Express;
    public serverName = "webserver";
    public tokens: string[] = [];
    public registeredUsers:any = [];
    public scoreBoard:any = [];
    
    constructor() {


        this.registeredUsers.push({username:'test',password:'test'});

        // initialize the express js app
        this.app = express();

        // register central logging
        this.app.use(this.logMiddleware.bind(this));

        // add the processing of json payload
        this.app.use([bodyParser.json()])

        this.app.use(express.static(__dirname + '/dist/frontend'));

        
        // make a signin endpoint with
        // - credential check
        // - logging // TODO: #GDPR :-)
        // - generate token
        // - store tokens (further improvement: expire-time)
        this.app.post('/signin', (req, res) => {
            console.log(req.body.username + req.body.password);
            if (this.isCredentialPresent) {
                console.log('  auth: ' + req.header('Authorization'));
                let newToken = uuid() as string;
                this.tokens.push(newToken);
                console.log('  token added to store: ' + newToken);
                res.status(200).json({ Token: newToken });
            } else {
                res.status(403).json({ reason: 'wrong credentials' });
            }
        });

        this.app.post('/score', (req, res) => {
            console.log('Whole body is: ' +req.body);
            console.log('Score send by: ' + req.body.name + ' ' + req.body.score);
            if (this.isCredentialPresent) {
                console.log('  auth: ' + req.header('Authorization'));   
                this.handleScore(req.body.name,req.body.score)             
                res.status(200);
            } else {
                res.status(403).json({ reason: 'wrong credentials' });
            }
        });

        this.app.get('/game', (req, res) => {            
            if (this.isCredentialPresent) {
                console.log('Game is served');                          
                res.status(200);
            } else {
                res.status(403).json({ reason: 'wrong credentials' });
            }
        });

        
        this.app.post('/register',(req,res)=>{
            this.registeredUsers.push({username:req.body.username,password:req.body.password});
            console.log('Registration completed: ' + req.body.username + ' ' + req.body.password);
            res.status(200);
        });

        this.app.get('/', function (req, res) {
            res.render('index', {});
          });
          
        // make a data endpoint with
        // - Auth check
        // - logging
        this.app.get('/data', (req, res) => {
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

        this.app.post('/score', (req, res) => {
            
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
        this.app.listen(3000, () => console.log('started at http://localhost:3000/'));
    }

    handleScore(name:string,score:string){
        this.scoreBoard.push({name:name,score:score.toString()});
         this.scoreBoard.sort((a:any,b:any) =>{
            if (parseInt(a.score) >  parseInt(b.score) ) {
                return -1;
              }
              if (parseInt(a.score) < b.score) {
                return 1;
              }
              
              return 0;
         });

         console.log(this.scoreBoard);
         if(this.scoreBoard.length > 10){
             this.scoreBoard.splice(10,1);
         }   
    }

     compare(a:number, b:number) {
        if (a <  b ) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        
        return 0;
      }

    private isCredentialPresent(req:any):boolean{

        for (let i = 0; i < this.registeredUsers; i++) {
            if(this.registeredUsers[i][0] === req.body.username && this.registeredUsers[i][1] === req.body.password){
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