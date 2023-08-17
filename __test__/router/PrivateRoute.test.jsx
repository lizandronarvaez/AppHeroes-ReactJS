/** @jest-environment jsdom */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import AuthContext from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../../src/router/PrivateRoute";
import React from "react";
global.React = React

describe('Pruebas en el <PrivateRoute />', () => {

    // TODO: REVISAR LA PRUEBA BIEN
    test('Debe mostrar los hijos sino esta autenticado', () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: "Lizandro Narvaez"
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute >
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
    });
    // expect(localStorage.setItem).toHaveBeenCalled();
    // expect(screen.getByText("Ruta rivada")).toBeTruthy();
    // screen.debug();
});