import authReducer from "../../../src/auth/context/authReducer";
import types from "../../../src/auth/types/types";

/* eslint-disable no-undef */
describe('Pruebas en el context authContext', () => {

    const stateInitial = {
        logged: false,
    }

    test('Debe retornar el estado por defecto', () => {

        const stateIsDefault = authReducer(stateInitial, {});
        expect(stateIsDefault).toBe(stateInitial);

    })

    test('Debe de llamar a login autenticar y establecer el user', () => {

        const user="Lizandro Narvaez";
        const actionLogin = {
            type: types.login,
            payload: user
        }

        const stateIsLogin = authReducer(stateInitial, actionLogin);

        expect(Object.values(stateIsLogin).length).toBe(2);
        expect(stateIsLogin).toEqual({
            logged:true,
            user:actionLogin.payload
        });

    });

    test('Debe de llamar a logout y borrar el nombre de usuario y logged debe ser igual a false', () => {
        
        const user="Lizandro Narvaez";
        const stateIsLogged={
            logged:true,
            user:user
        };

        const actionLogout = {
            type: "[AUTH] Logout",
            payload: user
        }


        const stateIsLogout = authReducer(stateIsLogged, actionLogout);

        expect(Object.values(stateIsLogout).length).toBe(1);
        expect(stateIsLogout).toStrictEqual(stateInitial);
    });
});