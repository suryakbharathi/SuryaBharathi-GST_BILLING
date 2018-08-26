const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Joi = require('joi');
const Relish = require('relish')({});

//CREATING CONNECTION WITH MYSQL
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "surya_gst"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


(async () => {
    const server = await new Hapi.Server({
        host: 'localhost',
        port: 8000,
        routes: { cors: true }
    });
    
    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: '9.1.1',
            },
        };
    try{
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
}catch(err){
    console.log(err);
}


// New product posting route
server.route(
    {
    method:'POST',
    path:'/productpost',
    config: {handler: function(request,reply){
        console.log("ENTERING TABLE");
        console.log(request.params); //params for get
        console.log(request.payload);
        
        let product_code = request.payload.product_code;
        let product_name = request.payload.product_name;
        let product_price = request.payload.product_price;
        let product_gst = request.payload.product_gst;

            var sql = "INSERT INTO `product_list`(`product_code`, `product_name`, `product_price`, `product_gst`) VALUES ('"+product_code+"','"+product_name+"','"+product_price+"','"+product_gst+"')";
            
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });

        return ({success:true,message: "product data stored"});
    },
        description: 'post product request',
        notes:'post  requ',
        tags:['api'],
        validate:{
            failAction: Relish.failAction,
            payload:{
                product_code: Joi.string().required(),
                product_name: Joi.string().required(),
                product_price: Joi.number().required(),
                product_gst: Joi.number().min(0).max(100)

            }
        }
    }
});


// All products get route
/*server.route(
    {
    method:'GET',
    path:'/productget',
    config:{
        handler: function (request, h)  {
       con.query("SELECT * FROM `product_list`",
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  },
        description: 'Get product data',
        notes: 'product Get request',
        tags: ['api'],
        validate: {
            failAction: Relish.failAction,
        }   
    }
});*/
server.route(
    {
    method:'GET',
    path:'/productget',
    config:{
        handler: (request, h) =>{

            let notes= con.query("SELECT * FROM `product_list`");
            //console.log(notes);
            return notes;
        },
        description: 'Get product data',
        notes: 'product Get request',
        tags: ['api'],
        validate: {
            failAction: Relish.failAction,
        }   
    }
});

  
    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }
    
   // server.route(Routes);
})();