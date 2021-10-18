const cities = ['Ciudad de México', 'Medellín', 'Buenos Aires', 'Lima', 'Santiago de Chile'];

const randomString = () => {
    // Almacenando un string aleatorio del array
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
}

const reverseString2 = text => {
    return new Promise((resolve, reject) => {
        if (!text) {
            // Promesa rechazada
            reject(Error('Error'))
        }

        // Promesa resuelta
        resolve(text.split('').reverse().join(''));
    })
}

module.exports = randomString