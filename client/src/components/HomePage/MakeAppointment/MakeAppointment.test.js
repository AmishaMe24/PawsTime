const fs = require('fs');
const path = require('path');

describe('MakeAppointments Component', () => {
    const filePath = path.join(__dirname, './MakeAppointment.js');

    test('MakeAppointments file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('MakeAppointments file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('MakeAppointments file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });
  
    test('MakeAppointments file contains "makeStyles" from Material-UI', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('makeStyles')).toBe(true);
    });

    test('MakeAppointments file contains "Button" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Button')).toBe(true);
    });

    test('MakeAppointments file contains "Grid" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Grid')).toBe(true);
    });

    test('MakeAppointments file contains "Box" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Box')).toBe(true);
    });

    test('MakeAppointments file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default MakeAppointments')).toBe(true);
    });
});
