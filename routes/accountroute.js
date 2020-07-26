module.exports = function(app, path){
    app.get('/mypage', function(req,res) {
        let filepath = path.resolve('./www/mypage.html');
        res.sendFile(filepath);
    })
}