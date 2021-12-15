const IssuesApi = require('./issues');
const issuesServices = require('./issuesService');
const Sinon = require('sinon');
const { Components, Issues } = require('./test_datasets');

describe('Test stubs', () => {
    describe('issuesService', () => {
        let componentCallbackSpy = Sinon.spy();
        const componentsStub = Sinon.stub(issuesServices, 'components');
        componentsStub.returns(Components);

        const issuesStub = Sinon.stub(issuesServices, 'issuesComponent').callsFake(
            (component) => {
                const issues = Issues.issues.filter(
                    (issue) =>
                        !!issue.fields.components.find((a) => a.name === component.name)
                );

                return new Promise((resolve) =>
                    resolve({ name: component.name, total: issues.length }));
            }
        );



        it('Test for API service errors', async () => {
            expect.assertions(1);
            try {
                await IssuesApi.componentIssuesSize();
            } catch (error) {
                expect(error).toEqual(new Error('Checking components argument')
                );
            }

        })

        it('returns list of no lead components with counts', async () => {
            const comp = await IssuesApi.nonLeadComponents();
            const data = await IssuesApi.nonLeadComponentsSize(comp);
            expect(data).toEqual(expect.arrayContaining([
                { name: 'Data analysis', total: 9 },
                { name: 'Infrastructure', total: 0 },
                { name: 'Marketplace', total: 0 },
            ]));
        });


    })
})





