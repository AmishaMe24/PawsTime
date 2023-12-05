const fs = require('fs');
const path = require('path');

describe('SocialSignUp Component', () => {
    const filePath = path.join(__dirname, './SocialSignUp.js');

    test('SocialSignUp file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('SocialSignUp file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('SocialSignUp file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });
  
    test('SocialSignUp file uses "useState" hook', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });

    test('SocialSignUp file contains "FaGoogle" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaGoogle')).toBe(true);
    });

    test('SocialSignUp file contains "FaFacebook" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaFacebook')).toBe(true);
    });

    test('SocialSignUp file contains "FaGithub" icon import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('FaGithub')).toBe(true);
    });

    test('SocialSignUp file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default SocialSignUp')).toBe(true);
    });
});
