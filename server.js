//Install express server
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});