const fs = require('fs');
const path = require('path');

describe('BusinessInfoData Data File', () => {
    const filePath = path.join(__dirname, '../BusinesInfoData.js');

    test('BusinessInfoData file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('BusinessInfoData file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('BusinessInfoData file contains an array export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('const businessInfoData = [')).toBe(true);
    });

    test('BusinessInfoData file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default businessInfoData')).toBe(true);
    });
}); 
