const fs = require('fs');
const path = require('path');

describe('LoginForm Component', () => {
    const filePath = path.join(__dirname, './LoginForm.js');

    test('LoginForm file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('LoginForm file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('LoginForm file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });

    test('LoginForm file uses "useState" hook', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });

    test('LoginForm file contains "Link" from "react-router-dom"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Link')).toBe(true);
    });

    test('LoginForm file contains "Login" component import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('Login')).toBe(true);
    });

    test('LoginForm file contains "SignUp" component import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('SignUp')).toBe(true);
    });

    test('LoginForm file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default LoginForm')).toBe(true);
    });
});
