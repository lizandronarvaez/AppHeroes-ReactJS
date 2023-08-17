/* eslint-disable no-undef */
import types from "../../../src/auth/types/types";
describe('Pruebas en el archivo types.js', () => {

    test('Comprobar el valor de los types', () => {

        expect(types).toStrictEqual({
            login: "[AUTH] Login",
            logout: "[AUTH] Logout"
        });
    });
});