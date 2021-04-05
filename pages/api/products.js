let fs = require('fs');

export default (req, res) => {
    let data = fs.readFileSync("data/products.json", 'utf8');
    res.status(200).json(JSON.parse(data));
}