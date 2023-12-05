const fs = require('fs');
const path = require('path');

describe('Header Component', () => {
    const filePath = path.join(__dirname, './Header.js'); // Adjust path as needed

    test('Header component file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Header component file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Header component file is a regular file', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.isFile()).toBe(true);
    });

    test('Header component file has a .js extension', () => {
        expect(path.extname(filePath)).toBe('.js');
    });

    test('Header component file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default')).toBe(true);
    });

    test('Header component file includes "Link" from react-router-dom', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import { Link } from \'react-router-dom\'')).toBe(true);
    });

    test('Header component file includes custom hook "useLogout"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useLogout')).toBe(true);
    });

    test('Header component file includes custom hook "useAuthContext"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useAuthContext')).toBe(true);
    });

    test('Header component file contains "button" element', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('<button')).toBe(true);
    });

    test('Header component file contains "section" element', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('<section')).toBe(true);
    });
});
  