const Issues   = require('./issues');

const main = async () => {
    const data = await Issues.nonLeadComponentsSize();
    console.log(data);
    data.forEach(element => {
        console.info(`Component '${element.name}' without a lead has ${element.total} issues`);
    });
};

main();