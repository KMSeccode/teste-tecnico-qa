export const LOGIN_SELECTORS = {
    username: '#username',
    password: '#password',
    submitButton: 'button[type="submit"]',
    flashMessage: '#flash',
};

export const UPLOAD_SELECTORS = {
    fileInput: '#file-upload',
    submitButton: '#file-submit',
    dragDropArea: '#drag-drop-upload',
    uploadedFiles: '#uploaded-files',
    successMessage: '.example h3',
};

export const FILE_PATHS = {
    textFile: 'cypress/fixtures/test-file.txt',
    imageFile: 'cypress/fixtures/test-image.png',
};

export const TEST_DATA = {
    validUser: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
    },
    invalidUser: {
        username: 'invalid',
        password: 'wrongpassword',
    },
    pdfUser: {
        username: 'practice',
        password: 'SuperSecretPassword!',
    },
};