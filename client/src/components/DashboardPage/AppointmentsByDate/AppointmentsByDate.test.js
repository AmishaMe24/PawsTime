const fs = require('fs');
const path = require('path');

describe('AppointmentByDate Component', () => {
    const filePath = path.join(__dirname, './AppointmentsByDate.js'); // Adjust the path as needed

    test('AppointmentByDate component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('AppointmentByDate component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });  

    test('AppointmentByDate component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });

    test('AppointmentByDate component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('AppointmentByDate component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });

    test('AppointmentByDate component file includes "useState"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });

    test('AppointmentByDate component file contains "Calendar"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Calendar')).toBe(true);
    });

    test('AppointmentByDate component file contains "Grid"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Grid')).toBe(true);
    });

    test('AppointmentByDate component file contains "useEffect"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useEffect')).toBe(true);
    });

    test('AppointmentByDate component file includes "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });
});
