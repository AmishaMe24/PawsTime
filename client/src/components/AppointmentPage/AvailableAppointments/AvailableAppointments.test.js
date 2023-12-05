
const fs = require('fs');
const path = require('path');

describe('AvailableAppointments Component', () => {
    const filePath = path.join(__dirname, './AvailableAppointments.js'); // Adjust the path as needed

    test('AvailableAppointments component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('AvailableAppointments component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });
});
  