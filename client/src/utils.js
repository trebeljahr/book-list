export function uuid(a) {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

export function getExampleBook() {
    const exampleBook = {
        id: uuid(),
        name: 'Harry Potter',
        readDates: [],
        purchased: false,
    };
    return exampleBook;
}

export function findAndExecute(elements, id, fn) {
    return elements.map(element => {
        if (element.id === id) {
            const newElement = fn(element);
            if (newElement) {
                return newElement;
            }
            // eslint-disable-next-line
            return;
        }
        return element;
    });
}
