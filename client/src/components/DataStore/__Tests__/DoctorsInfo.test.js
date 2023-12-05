const fs = require('fs');
const path = require('path');

describe('DoctorsInfo Data File', () => {
    const filePath = path.join(__dirname, '../DoctorsInfo.js');

    test('DoctorsInfo file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('DoctorsInfo file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('DoctorsInfo file contains an array export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('const doctorsInfo = [')).toBe(true);
    });

    test('DoctorsInfo file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default doctorsInfo')).toBe(true);
    });
});
