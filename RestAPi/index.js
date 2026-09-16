const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
// instance is created 
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});