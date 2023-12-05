const fs = require('fs');
const path = require('path');

describe('FeaturedService Component', () => {
    const filePath = path.join(__dirname, './FeaturedService.js');

    test('FeaturedService file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('FeaturedService file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('FeaturedService file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });
 
    test('FeaturedService file contains "Grid" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Grid')).toBe(true);
    });

    test('FeaturedService file contains "Box" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Box')).toBe(true);
    });

    test('FeaturedService file contains "Button" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Button')).toBe(true);
    });

    test('FeaturedService file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default LearnMore')).toBe(true);
    });
});