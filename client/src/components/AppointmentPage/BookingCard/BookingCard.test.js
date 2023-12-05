
const fs = require('fs');
const path = require('path');

describe('BookingCard Component', () => {
    const filePath = path.join(__dirname, './BookingCard.js'); // Adjust the path as needed

    test('BookingCard component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('BookingCard component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });
});
  