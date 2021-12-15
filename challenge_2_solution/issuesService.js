const CONFIG = require('./config.json');
const superagent = require('superagent');
const { logError} = require('./utilities');
const Url = CONFIG.Url;
const ComponentsEndpoint = CONFIG.ComponentsEndPoint;
const SearchEndpoint =  CONFIG.SearchEndPoint;

module.exports = function () {
    const isCallbackPresent = (component) => {
        if (!component) {
            throw new Error('A component or component callback must be present')
        }
    }

    const components = async () => {
        try {
            const { body } = await superagent.get(`${Url}${ComponentsEndpoint}`);
            return body;
    
        } catch (error) {
            logError(error, 'Components not fetched');
        }
    }

    const issuesComponent = async (component) => {
        isCallbackPresent(component);

        try {
            const { body } = await superagent.get(
                `${Url}${SearchEndpoint}"${component.name}"`
            );
            return { name: component.name, total: body.total };
        } catch (error) {
            
            logError(error, 'Cannot retrieve issues');
        }
    }

    return {components, issuesComponent}
}()