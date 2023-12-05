
const fs = require('fs');
const path = require('path');

describe('BookingFormModal Component', () => {
    const filePath = path.join(__dirname, './BookingFormModal.js'); // Adjust the path as needed

    test('BookingFormModal component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('BookingFormModal component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('BookingFormModal component file size is reasonable', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeLessThan(10000); // Check if file size is less than 10KB
    });

    test('BookingFormModal component file is readable', () => {
        expect(() => fs.readFileSync(filePath, 'utf8')).not.toThrow();
    });

    test('BookingFormModal component file has a default export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });
    
});
