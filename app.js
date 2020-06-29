var fs = require('fs')
const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

// Serve static files
app.use(express.static('.'));

app.get("/", (req, res) => {
    res.send("Server is up!!")
})

app.get("/demo", (req, res) => {
    readPage('./index.html', res);
});

app.get("/admin", (req, res) => {
    readPage('./admin.html', res)
})

function readPage(page, response) {
    fs.readFile(page, null,
        function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
}



app.listen(PORT, "0.0.0.0", () => console.log("Chatbot demo app is running on port: ", PORT))
