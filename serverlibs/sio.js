var ioh = require("socket.io")
module.exports = (server) => {
    const io = ioh(server)

    io.on("connection", socket => {
        console.log("client is connected", socket.id)
    })
}