const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      dust = require('dustjs-helpers'),
      { Pool, Client } = require('pg'),
      app = express();

    const PORT = 3000; 

      //DB Connect String
      const connectionString = 'postgresql://maxim:qvez21@database.server.com:3211/recipebookdb';


      //Assign Dust Engine To .dust Files
      app.engine('dust', cons.dust);
     

      //Set Default Ext .dust
      app.set('view engine','dust');
      app.set('views', __dirname + '/views');

      //Set Public Folder
      app.use(express.static(path.join(__dirname, 'public')));


      //Body Parser Middleware
      app.use(bodyParser.urlencoded({extended: false}));
      app.use(bodyParser.json());

      app.get('/', (req, res) => {
        
        
         //PG Connect
         const pool = new Pool({
            connectionString: connectionString,
          })
          
          pool.query('SELECT NOW()', (err, res) => {
            console.log(err, res)
            pool.end()
          })
          
          const client = new Client({
            connectionString: connectionString,
          })
          client.connect()
          
          client.query('SELECT * FROM recipes', (err, res) => {
            // console.log(err, res)
            if(err){
                return console.error('error running query', err);
            }
            res.render('index', {recipes: result.rows});
            client.end()
          })
      });

      //Server
    app.listen(PORT, () => {
        console.log(('Server Started on Port ' + PORT));
    })