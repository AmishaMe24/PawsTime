const fs = require('fs');
const path = require('path');

describe('Home Component', () => {
    const filePath = path.join(__dirname, './Home.js');

    test('Home file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Home file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Home file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });
 
    test('Home file contains multiple component imports', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Footer')).toBe(true);
        expect(fileContent.includes('Header')).toBe(true);
        expect(fileContent.includes('Services')).toBe(true);
    });

    test('Home file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default Home')).toBe(true);
    });
});