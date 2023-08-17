/** @jest-environment jsdom */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import PublicRoute from "../../src/router/PublicRoute";
import React from "react";
import AuthContext from "../../src/auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
global.React = React

/* eslint-disable no-undef */
describe('Pruebas en el componente <PublicRoute />', () => {
    test('Debe de mostrar el children  o el texto ruta publica si no está autenticado', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Ruta publica")).toBeTruthy();
        // screen.debug();
    });

    test('Debe de direccionar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: "Lizandro Narvaez"
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/login"]}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel-page" element={<h1>Pagina de Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Pagina de Marvel")).toBeTruthy();

    });

});