let calc = {
    sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    },

    multiply(...numbers) {
        return numbers.reduce((a, b) => a * b, 1);
    }
}

export { calc };