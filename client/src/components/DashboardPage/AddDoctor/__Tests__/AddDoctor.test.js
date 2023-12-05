const fs = require('fs');
const path = require('path');

describe('AddDoctor Component', () => {
    const filePath = path.join(__dirname, '../AddDoctor.js'); // Adjust the path as needed

    test('AddDoctor component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('AddDoctor component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('AddDoctor component file size is reasonable', () => {
        const fileStats = fs.statSync(filePath);
        const fileSizeInKB = fileStats.size / 1024; // Convert bytes to kilobytes
        expect(fileSizeInKB).toBeLessThan(10); // Check if file size is less than 10KB
    });  

    test('AddDoctor component file is readable', () => {
        expect(() => fs.readFileSync(filePath, 'utf8')).not.toThrow();
    });

    test('AddDoctor component file has a default export', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Improved check for default export using a regular expression
        expect(/export default/.test(fileContent)).toBe(true);
    });

    test('AddDoctor component file includes a form', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Improved check for the presence of a form using regular expression
        expect(/<form[^>]*>/i.test(fileContent)).toBe(true);
    });

    test('AddDoctor component file includes a Button component', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Improved check for the presence of a Button component using regular expression
        expect(/<Button[^>]*>/i.test(fileContent)).toBe(true);
    });
});
