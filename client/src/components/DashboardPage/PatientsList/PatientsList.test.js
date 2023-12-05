const fs = require('fs');
const path = require('path');

describe('PatientsList Component', () => {
    const filePath = path.join(__dirname, './PatientsList.js');

    test('PatientsList component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('PatientsList component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('PatientsList component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });

    test('PatientsList component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('PatientsList component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });

    test('PatientsList component file includes "useState"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });
});
