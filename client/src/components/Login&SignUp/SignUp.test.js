const fs = require('fs');
const path = require('path');

describe('SignUp Component', () => {
    const filePath = path.join(__dirname, './SignUp.js');

    test('SignUp file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('SignUp file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('SignUp file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });

    test('SignUp file uses "useState" hook', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });
  
    test('SignUp file contains "axios" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('axios')).toBe(true);
    });

    test('SignUp file contains "SocialSignUp" component import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('SocialSignUp')).toBe(true);
    });

    test('SignUp file contains "Spinner" from "react-bootstrap"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Spinner')).toBe(true);
    });

    test('SignUp file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default SignUp')).toBe(true);
    });

    test('SignUp file contains "FaEnvelope" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaEnvelope')).toBe(true);
    });

    test('SignUp file contains "FaLock" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaLock')).toBe(true);
    });

    test('SignUp file contains "FaUser" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaUser')).toBe(true);
    });

    test('SignUp file contains "FaCheck" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaCheck')).toBe(true);
    });

    test('SignUp file contains "FaTimes" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaTimes')).toBe(true);
    });

    test('SignUp file includes password validation logic', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('passwordValidation')).toBe(true);
    });

    test('SignUp file includes email error handling', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('handleEmailError')).toBe(true);
    });

    test('SignUp file includes form submission handling', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('handleOnSubmit')).toBe(true);
    });

    test('SignUp file includes error state management', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('setError')).toBe(true);
    });

    test('SignUp file includes loading state management', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('setLoading')).toBe(true);
    });
});
