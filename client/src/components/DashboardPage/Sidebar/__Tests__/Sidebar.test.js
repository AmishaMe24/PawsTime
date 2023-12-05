const fs = require('fs');
const path = require('path');

describe('Sidebar Component', () => {
    const filePath = path.join(__dirname, '../Sidebar.js'); // Adjust the path as needed

    test('Sidebar component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Sidebar component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Sidebar component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });
 
    test('Sidebar component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('Sidebar component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });
});
