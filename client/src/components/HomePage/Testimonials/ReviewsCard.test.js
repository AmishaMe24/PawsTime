const fs = require('fs');
const path = require('path');

describe('ReviewsCard Component', () => {
    const filePath = path.join(__dirname, './ReviewsCard.js');

    test('ReviewsCard file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('ReviewsCard file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('ReviewsCard file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });

    test('ReviewsCard file contains "makeStyles" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('makeStyles')).toBe(true);
    });

    test('ReviewsCard file contains "Card" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Card')).toBe(true);
    });

    test('ReviewsCard file contains "Box" component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Box')).toBe(true);
    });

    test('ReviewsCard file contains "testimonialsInfo" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('testimonialsInfo')).toBe(true);
    });

    test('ReviewsCard file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default ReviewsCard')).toBe(true);
    });
});