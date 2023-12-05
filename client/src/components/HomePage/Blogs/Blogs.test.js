const fs = require('fs');
const path = require('path');

describe('Blogs Component', () => {
    const filePath = path.join(__dirname, './Blogs.js');

    test('Blogs file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Blogs file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Blogs file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });  

    test('Blogs file contains "Card" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Card')).toBe(true);
    });

    test('Blogs file contains "Box" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Box')).toBe(true);
    });

    test('Blogs file contains "blogsInfo" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('blogsInfo')).toBe(true);
    });

    test('Blogs file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default Blogs')).toBe(true);
    });
});