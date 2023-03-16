//Imam Azka Ramadhan Aditia

const express = require('express')
const app = express()
const port = 3000

//first data
const data = [
    {
        "id": "1",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "1234567890"
    }
];

//new data to be added
const newData = {
    "id": "2",
    "name": "Robert Egger",
    "email": "Robert@example.com",
    "phone": "1234567890"
}

let response = 0;   //response code

//get request to get contacts list
app.get('/contacts', (req, res) => {
    res.json(data);
    response = 200;
    console.log(`Response status = ${response}, contacts loaded!`);
})

//post request to add new contact to the list
app.post('/contacts', (req, res) => {
    data.push(newData);
    res.json(data);
    response = 201;
    console.log(`Response status = ${response}, new contacts added!`);
});

//delete request to delete a contact from the list
app.delete('/contacts/:id', (req, res) => {
    data.pop();
    res.json(data);
    response = 200;
    console.log(`Response status = ${response}, contacts deleted!`);
});

app.listen(port, () => {
    console.log(`This app listening on port ${port}`);
})