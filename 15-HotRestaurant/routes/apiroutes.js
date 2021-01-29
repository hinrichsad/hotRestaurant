const customerData = require('../data/customerData');
const waitList = require('../data/waitListData');

module.exports = (app) => {


app.get('/api/makeres', (req, res) => res.sendFile(path.join(__dirname, 'makeres.html')));

app.get('/api/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')))


app.post('/api/tables', (req, res) => {

    if(customerData.length < 10){
        customerData.push(req.body);
        res.json(true);
    }else{
        waitList.push(req.body);
        res.json(false);
    }
});

app.post('/api/clear', (req, res) =>{
    tableData.length = 0;
    waitList.length = 0;

    res.json({ok: true})
})
}

