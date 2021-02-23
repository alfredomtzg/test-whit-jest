const city = ['CDMX', 'Bogotá', 'Lima', 'BuenosAires', 
'Oaxaca', 'New York'];

const randomString = () => {
    const string = city[Math.floor(Math.random() * city.length ) ];
    return string;
};

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Esto es un Error '))
        }
    })
}

module.exports = randomString; 
