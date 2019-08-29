export default function() {
    const input = (target) => {
        return {
            type: 'INPUT',
            name: target.name,
            value: target.value
        }
    };

    const message = (message) => {
        return {
            type: 'MESSAGE',
            message: message
        }
    };

    return { input, message };
}