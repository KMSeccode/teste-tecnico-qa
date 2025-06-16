import UploadPage from '../../pages/UploadPage';

describe('Upload Feature', () => {
    const testFiles = {
        single: 'cypress/fixtures/test-file.txt',
        image: 'cypress/fixtures/test-image.png'
    };

    beforeEach(() => {
        UploadPage.visit();
    });
    
    context('Upload via Choose File', () => {
        //Verifica o upload de arquivo usando o 'Escolher arquivo'
        it('should upload file using choose file button', () => {
            UploadPage
            .uploadFile(testFiles.single)
            .assertUploadSuccess('test-file.txt');
        });
    });

    context('Upload via Drag and Drop', () => {
        //Verifica o upload de arquivo na área de 'drag-and-drop'
        it('should upload file using drag and drop area', () => {
            UploadPage
            .dragAndDropFile(testFiles.single)
            .assertUploadSuccess('test-file.txt');
        });
    });

    context('Multiple Uploads', () => {
        //Verifica o upload de diversos arquivos
        it('should handle sequence of file uploads', () => {
        // Primeiro upload
            UploadPage
            .uploadFile(testFiles.single)
            .assertUploadSuccess('test-file.txt');

        // Segundo upload
            UploadPage
            .visit()
            .uploadFile(testFiles.image)
            .assertUploadSuccess('test-image.png');
        });
    });
});