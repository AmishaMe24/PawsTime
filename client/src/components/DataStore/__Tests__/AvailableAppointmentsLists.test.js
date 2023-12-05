const fs = require('fs');
const path = require('path');

describe('AvailableAppointmentLists Data', () => {
    const filePath = 'C:\\Users\\nitin\\OneDrive\\Documents\\GitHub\\petpeaves\\client\\src\\components\\DataStore\\AvailableAppointmentLists.js';

    test('availableAppointmentLists file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('availableAppointmentLists file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    }); 

    test('availableAppointmentLists file is a JavaScript file', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('availableAppointmentLists file is readable', () => {
        expect(() => fs.readFileSync(filePath, 'utf8')).not.toThrow();
    });
});
