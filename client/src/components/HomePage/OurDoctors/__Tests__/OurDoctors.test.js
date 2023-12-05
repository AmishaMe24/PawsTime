const fs = require('fs');
const path = require('path');

describe('OurDoctors Component', () => {
    const filePath = path.join(__dirname, '../OurDoctors.js'); // Adjust the path as needed

    test('OurDoctors file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('OurDoctors file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('OurDoctors file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });

    test('OurDoctors file contains "Material-UI" components', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Card')).toBe(true);
        expect(fileContent.includes('CardContent')).toBe(true);
        expect(fileContent.includes('CardMedia')).toBe(true);
    });

    test('OurDoctors file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default OurDoctors')).toBe(true);
    });

    test('OurDoctors file contains a useState hook', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });

    test('OurDoctors file contains useEffect hook', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useEffect')).toBe(true);
    });

    test('OurDoctors file uses makeStyles', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('makeStyles')).toBe(true);
    });

    test('OurDoctors file contains "Typography" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Typography')).toBe(true);
    });

    test('OurDoctors file contains "Container" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Container')).toBe(true);
    });

    test('OurDoctors file contains "Box" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Box')).toBe(true);
    });

    test('OurDoctors file contains "IconButton" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('IconButton')).toBe(true);
    });

});
