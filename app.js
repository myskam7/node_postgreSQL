// const express = require('express'),
//       path = require('path'),
//       bodyParser = require('body-parser'),
//       cons = require('consolidate'),
//       dust = require('dustjs-helpers'),
//       {Client, Pool} = require('pg'),
//       app = express();

//     const PORT = 3000; 

//       //DB Connect String
//       const connectionString = 'postgresql://maxim:qvez21@localhost:5433/recipebookdb';


//       //Assign Dust Engine To .dust Files
//       app.engine('dust', cons.dust);
     

//       //Set Default Ext .dust
//       app.set('view engine','dust');
//       app.set('views', __dirname + '/views');

//       //Set Public Folder
//       app.use(express.static(path.join(__dirname, 'public')));


//       //Body Parser Middleware
//       app.use(bodyParser.urlencoded({extended: false}));
//       app.use(bodyParser.json());

//       app.get('/', (req, res) => {
        
        
//          //PG Connect
         
//          const pool = new Pool({
//             connectionString: connectionString,
//          });
          
// //           pool.query('SELECT * FROM recipe', (err, res) => {
// //             console.log(err, res)
// //             pool.end()
// //           })
          
//           const client = new Client({
//             connectionString: connectionString,
//           })

//         pool.on('error', (err, client) => {
//             console.error('Unexpected error on idle client', err)
//             process.exit(-1)
//           })

//           pool.connect()
//             .then(client => {
//                 return client.query('SELECT * FROM recipe')
//             .then(res => {
//         client.release('index', {recipe: res.rows})
//         // console.log('index', {recipe: res.rows})
//       })
//       .catch(e => {
//         client.release()
//         console.log(err.stack)
//       })
//   })


        //  pool.connect(connectionString, (err, client, done) => {
        //      if(err){
        //          return console.error('error fetching client from pool', err);
        //      }
        //      client.query('SELECT * FROM recipe', (err, result) => {
        //          if(err){
        //              console.error('error running query', err);
        //          }
        //          res.render('index', {recipe: result.rows});
        //          done();
        //      });
        //  });


        //   pool.connect((err, client, done) => {
        //       if(err){
        //           throw err
        //       }

        //   client.query('SELECT * FROM recipe')
        //    .then(res => console.log('index', {recipe: res.rows}))
        //    .catch(e => console.error(e.stack));
        //     // console.log(err, res)
        




       
        // });
        

      //Server
    // app.listen(PORT, () => {
    //     console.log(('Server Started on Port ' + PORT));
    // });