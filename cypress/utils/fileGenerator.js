export const generateTestFile = (fileName, content = 'Test file content') => {
    const filePath = `cypress/fixtures/test-files/${fileName}`;
    cy.writeFile(filePath, content);
    return filePath;
};