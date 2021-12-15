const issuesServices = require('./issuesService');
const {logError, arrayCheck} = require('./utilities');

module.exports = function() {
    const nonLeadComponents = async () => {
        try {
            const target = await issuesServices.components();
            return target.filter((component) => !component.lead);
        } catch (error) {
            logError(error, 'Non lead components not fetched');
        }
    };

    const componentIssuesSize = async (components, componentCallback) => {
        arrayCheck(components, 'Checking components argument')
        return Promise.all(
            components.map((component) =>
                issuesServices.issuesComponent(component, componentCallback)
            )
        );
    };

    const nonLeadComponentsSize = async (callback) => {
        try {
            const components = await nonLeadComponents();
            return componentIssuesSize(components);
        } catch (error) {
            logError(error, 'Cannot retrieve issues');
        }
    };
 
    return { nonLeadComponents, componentIssuesSize, nonLeadComponentsSize}
}();

