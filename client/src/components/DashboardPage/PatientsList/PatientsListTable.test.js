const fs = require('fs');
const path = require('path');

describe('PatientsListTable Component', () => {
    const filePath = path.join(__dirname, './PatientsListTable.js');

    test('PatientsListTable component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('PatientsListTable component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('PatientsListTable component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });

    test('PatientsListTable component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('PatientsListTable component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });

    test('PatientsListTable component file includes "makeStyles"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('makeStyles')).toBe(true);
    });
});
