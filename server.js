import express from 'express'; 


const server = express();

const PORT = process.env.PORT || 6060;

const ready = () => console.log(`Server is running on port: ${PORT}`);


server.listen(PORT, ready);