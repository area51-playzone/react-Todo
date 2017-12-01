const 	express  = require('express'),
        mongoose = require('mongoose'),
        bodyParser = require('body-parser'),
        Task = require('./models/task').Task,
        app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/to-do',(err)=>{
  err && console.error(err);
});

app.use(express.static('deploy'));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
	//res.send("Hello world 2.0!");
	res.render('blank',{
		title:"Mastering Flux",
		body: "<div id='root'></div>"
	});
});

app.post("/add-task", (req,res)=>{
	const task = new Task(req.body);
  task.save((err, task)=>{
    if(err || !task){
      // deal with problem
    }else{

    }
  });
  res.send(task);
});

app.listen(3000, ()=>{
    console.log("We are running a server on port 3000");
})
