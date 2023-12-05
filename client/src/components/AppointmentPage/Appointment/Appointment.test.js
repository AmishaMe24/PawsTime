const fs = require('fs');
const path = require('path');

describe('Appointment Component', () => {
    const filePath = path.join(__dirname, './Appointment.js'); 

    test('Appointment component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Appointment component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });
});
  