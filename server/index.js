// Code for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'UserInformation',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to UserInformation database');

        // Create indexes
        await User.createIndexes();

        // Start server
        app.listen(5000, () => {
            console.log("App listening at port 5000");
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
}

// Define user schema and model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    loginStatus: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);

// Call connectToDatabase function to start the application
connectToDatabase();
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors(
	{
		origin: ["https://homify-client-test.vercel.app/"],
		methods: ["POST", "GET"],
		credentials: true
	}
));
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/login", async (req, res) => {
	try{
		const {name, password} = req.body;
		User.findOne({name : name})
		.then(user => {
			if(user) {
				// console.log("Entered user checking for password")
				// console.log("Password typed : "+user.password);
				// console.log("Password in database : "+password);
				if(user.password == password){
					// mongoose.Schema.Types.Boolean.convertToTrue
					res.json("Success")
				}else{
					res.json("The password is incorrect")
				}
			}else{
				res.json("No record existed")
			}
		})
	} catch (e) {
		console.log("error : "+e);
		res.send("Something Went Wrong");
	}
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		console.log("error:"+e);
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
