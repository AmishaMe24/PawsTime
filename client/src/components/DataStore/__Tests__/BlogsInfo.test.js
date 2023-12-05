const fs = require('fs');
const path = require('path');

describe('BlogsInfo Data File', () => {
    const filePath = path.join(__dirname, '../BlogsInfo.js');

    test('BlogsInfo file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('BlogsInfo file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('BlogsInfo file contains an array export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('const blogsInfo = [')).toBe(true);
    });

    test('BlogsInfo file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default blogsInfo')).toBe(true);
    }); 
});
