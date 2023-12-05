const fs = require('fs');
const path = require('path');

describe('TestimonialsInfo Data File', () => {
    const filePath = path.join(__dirname, '../TestimonialsInfo.js');

    test('TestimonialsInfo file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('TestimonialsInfo file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('TestimonialsInfo file contains an array export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('const testimonialsInfo = [')).toBe(true);
    });

    test('TestimonialsInfo file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default testimonialsInfo')).toBe(true);
    });
});
 