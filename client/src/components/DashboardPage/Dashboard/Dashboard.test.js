const fs = require('fs');
const path = require('path');

describe('Dashboard Component', () => {
    const filePath = path.join(__dirname, './Dashboard.js');

    test('Dashboard component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Dashboard component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Dashboard component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });

    test('Dashboard component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });
 
    test('Dashboard component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });

    test('Dashboard component file includes "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });
});
