const fs = require('fs');
const path = require('path');

describe('Services Component', () => {
    const filePath = path.join(__dirname, './Services.js');

    test('Services file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Services file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Services file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });  

    test('Services file contains "Container" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Container')).toBe(true);
    });

    test('Services file contains "Box" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Box')).toBe(true);
    });

    test('Services file contains "servicesInfoData" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('servicesInfoData')).toBe(true);
    });

    test('Services file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default Services')).toBe(true);
    });
});