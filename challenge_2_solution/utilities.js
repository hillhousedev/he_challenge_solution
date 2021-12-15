const arrayCheck = (args, message) => {
    if (!args || args ?.length === 0) throw new Error(message);
};


function logError(error, message) {
    console.log(error);
    throw new Error(`${message} | error is: ${error}`);
};

module.exports = {logError, arrayCheck};

