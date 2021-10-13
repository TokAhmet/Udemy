const express = require('express');
const app = express();
const port = 5000;

app.set('views', './udemy-javascript/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('select', { text: 'kör bara' });
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.use(express.static('./udemy-javascript/views'));
app.use('/css', express.static(`${__dirname}views`));
app.use('/js', express.static(`${__dirname}views`));

app.listen(port, (error) => {
	if (error) {
		console.log('something went wrong', error);
	} else {
		console.log(`server is listening to ${port}`);
	}
});
