const fs = require('fs');
const path = require('path');

describe('Login Component', () => {
    const filePath = path.join(__dirname, './Login.js');

    test('Login file exists', () => {
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('Login file is not empty', () => {
        const fileStats = fs.statSync(filePath);
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('Login file contains "React" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('import React')).toBe(true);
    });

    test('Login file uses "useState" hook', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useState')).toBe(true);
    });

    test('Login file includes useForm from "react-hook-form"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useForm')).toBe(true);
    });

    test('Login file contains "axios" import', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('axios')).toBe(true);
    });

    test('Login file uses "useContext"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useContext')).toBe(true);
    });

    test('Login file contains "useNavigate" from "react-router-dom"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('useNavigate')).toBe(true);
    });

    test('Login file contains "export default"', () => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent.includes('export default Login')).toBe(true);
    });
});
