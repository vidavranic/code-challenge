module.exports = function encoder(req, res) {
    const { inputString } = req.body;
    let k = 0;
    let outputString = "";
    for(let i = 0; i < inputString.length; i++) {
        k++;
        if(inputString[i] !== inputString[i+1]) {
            outputString += inputString[i] + k;
            k = 0;
        }
    }
    return res.send(outputString)
};