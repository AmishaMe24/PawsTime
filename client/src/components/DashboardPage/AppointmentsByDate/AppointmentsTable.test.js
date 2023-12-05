const fs = require('fs');
const path = require('path');

describe('AppointmentsTable Component', () => {
    const filePath = path.join(__dirname, './AppointmentsTable.js');

    test('AppointmentsTable component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('AppointmentsTable component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('AppointmentsTable component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });  

    test('AppointmentsTable component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('AppointmentsTable component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });

    test('AppointmentsTable component file includes "makeStyles"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('makeStyles')).toBe(true);
    });

    test('AppointmentsTable component file contains "Table"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Table')).toBe(true);
    });

    test('AppointmentsTable component file contains "TableRow"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('TableRow')).toBe(true);
    });

    test('AppointmentsTable component file contains "TableCell"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('TableCell')).toBe(true);
    });

    test('AppointmentsTable component file includes "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });

});
