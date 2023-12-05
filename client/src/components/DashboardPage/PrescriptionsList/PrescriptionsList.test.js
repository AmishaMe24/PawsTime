const fs = require('fs');
const path = require('path');

describe('PrescriptionsList Component', () => {
    const filePath = path.join(__dirname, './PrescriptionsList.js');

    test('PrescriptionsList component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('PrescriptionsList component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('PrescriptionsList component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });
});