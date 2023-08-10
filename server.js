require('dotenv').config()
// this allows you to use the env file, the variables

require('./config/database')
// allows us to get our mongoose database functionality, why can we require config database? we don't need to save it bc we just need to run it and connect the database, we dont need to save it


const app = require('./app-server')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`i am listening on ${PORT}. we in this b`)
})


/*
const myOtherFunction = () => ''
function(){
	const app = myOtherFunction()
}
*/



