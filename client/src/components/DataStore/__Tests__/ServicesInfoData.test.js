const fs = require('fs');
const path = require('path');

describe('ServicesInfoData Data File', () => {
    const filePath = path.join(__dirname, '../ServicesInfoData.js'); // Adjust the path as needed

    test('ServicesInfoData file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('ServicesInfoData file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('ServicesInfoData file contains an array export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('const servicesInfoData = [')).toBe(true);
    });

    test('ServicesInfoData file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default servicesInfoData')).toBe(true);
    });
});
