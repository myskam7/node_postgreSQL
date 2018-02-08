const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      dust = require('dustjs-helpers'),
      pg = require('pg'),
      app = express();



      //DB Connect String
      const connect = 'postgresql://maxim:qvez21@database.server.com:3211/recipebookdb';


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