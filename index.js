const server = require("./server");

const port = process.env.PORT || 4567;
server.listen(port, () => console.log(`API running on port ${port}`));
