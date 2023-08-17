/** @jest-environment jsdom */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react"
import AuthContext from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../src/router/AppRouter"
global.React = React;
describe('Pruebas en el componente <AppRouter />', () => {

    test('Debe mostrar el login si no esta autenticado', () => {

        render(
            <MemoryRouter initialEntries={["/marvel-page"]}>
                <AuthContext.Provider value={{ logged: false }}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // La pagina debe tener dos texto de login
        expect(screen.getAllByText("Login").length).toBe(2);
        // screen.debug();
    });

    test('Debe mostrar el componente de marvel si esta autenticado', () => {
        const userValue={
            logged:true,
            user:"Lizandro Tatuaje"
        }
        render(
            <MemoryRouter initialEntries={["/marvel-page"]}>
                <AuthContext.Provider value={userValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // La pagina debe tener dos texto de login
        expect(screen.getByText("Marvel Page")).toBeTruthy();
        expect(screen.getByText("Spider Man")).toBeTruthy();

        // screen.debug();
    });
});