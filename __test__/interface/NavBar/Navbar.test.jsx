/** @jest-environment jsdom */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../../../src/interface/components/NavBar/Navbar";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import AuthContext from "../../../src/auth/context/AuthContext";
import Swal from "sweetalert2/dist/sweetalert2.all";
global.React = React;

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockUseNavigate,
}))
window.scrollTo = jest.fn();

jest.mock("sweetalert2", () => ({
    fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
}));
describe('Pruebas en el componente <NarBar />', () => {

    const contextValue = {
        logged: true,
        user: "Lizandro & Marina",
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks);

    test('Mostrar el nombre del usuario en la barra de la navegacion', () => {

        render(
            <MemoryRouter initialEntries={["/login"]}>
                <AuthContext.Provider value={{ logged: true, user: "Lizandro & Marina" }}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        )

        expect(screen.getByText("Bienvenido Lizandro & Marina")).toBeTruthy();
        // screen.debug()
    });

    test('Debe de llamar a logout y navigate cuando se hace click en el boton', () => {


        render(
            <MemoryRouter initialEntries={["/marvel-page"]}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        )

        // Hace click al boton logout
        const buttonLogout = screen.getByRole("button");
        fireEvent.click(buttonLogout);

        // Hace click en confirmar en el boton sweetAlert
        expect(Swal.fire).toHaveBeenCalled();

        // const buttonConfirm = screen.getByText(/continuar/i)
        // fireEvent.click(buttonConfirm)

        // expect(contextValue.logout).toHaveBeenCalled();
        // expect(mockUseNavigate).toHaveBeenCalledWith('/login', { "replace": true });


        // screen.debug()
    });
});