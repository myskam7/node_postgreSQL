
const pg = require('pg');

// const client = new pg.Client('postgresql://maxim:qvez21@localhost:5434/node_postgres_demo');

const client = new pg.Client(process.env.DATABASE_URL);


const seed = () => {
    const qry = `
    DROP TABLE IF EXISTS products;
    CREATE TABLE  products (
        id SERIAL primary key,
        name text
    );
    insert into products (name) values ('mizz') returning id
    `;
    client.query(qry, (err, result) => {
        if(err){
            console.log(err);
        }
    })
}

const connect = () => {
  client.connect((err) => {
    if(!err){
        if(process.env.SEED){
            seed();
        }
    }
    // client.connect((err) => {
    //     if(!err){
    //         client.query('select * from foos', (err, result) => {
    //             if(err){
    //                 console.log(err);
    //             }else {
    //             console.log(result);
    //           }
    //         })
    //     }
        
    });
};

connect();