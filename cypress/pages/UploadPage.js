import { UPLOAD_SELECTORS } from '../support/constants';

class UploadPage {
    elements = {
        fileInput: () => cy.get(UPLOAD_SELECTORS.fileInput),
        submitButton: () => cy.get(UPLOAD_SELECTORS.submitButton),
        dragDropArea: () => cy.get(UPLOAD_SELECTORS.dragDropArea),
        uploadedFiles: () => cy.get(UPLOAD_SELECTORS.uploadedFiles),
        successMessage: () => cy.get(UPLOAD_SELECTORS.successMessage),
    };

    visit() {
        cy.visit('/upload');
        return this;
    }

    selectFile(filePath) {
        this.elements.fileInput().selectFile(filePath);
        return this;
    }

    submitFile() {
        this.elements.submitButton().click();
        return this;
    }

    uploadFile(filePath) {
        this.selectFile(filePath).submitFile();
        return this;
    }

    dragAndDropFile(filePath) {
        this.elements.fileInput().selectFile(filePath, { action: 'drag-drop' });
        this.submitFile();
        return this;
    }

    assertUploadSuccess(filename) {
        this.elements.successMessage()
        .should('be.visible')
        .and('contain', 'File Uploaded!');
        
        this.elements.uploadedFiles()
        .should('be.visible')
        .and('contain', filename);
        
        return this;
  }
}

export default new UploadPage();