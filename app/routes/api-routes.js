module.exports = (app) =>{
    app.get("/api/library", (req, res) =>{
        const dbquery = "SELECT * FROM library";
    })
}