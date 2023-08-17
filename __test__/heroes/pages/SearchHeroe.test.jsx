/** @jest-environment jsdom */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react"
import SearchHeroe from "../../../src/heroes/pages/SearchHeroe/SearchHeroe";
import { MemoryRouter } from "react-router-dom";
import ListSearch from "../../../src/heroes/pages/ListSearch/ListSearch";
global.React = React;

// ESTA ES UNA FUNCION MOCK PARA LLAMAR A USENAVIGATE
// de esta forma podremos utilizar navigate en las pruebas
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockUseNavigate,
}))
// 

describe('Pruebas en la pagina SearchHeroe', () => {
    beforeEach(() => jest.clearAllMocks);

    test('Debe de mostrar los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchHeroe />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
        // screen.debug()
    });


    test('Debe de mostrar a un personaje y su valor', () => {

        const inputValue = "hulk"
        const { container } = render(
            <MemoryRouter initialEntries={[`/search?q=${inputValue}`]} >
                <SearchHeroe />
                <ListSearch />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();

        // comprueba que el valor del input es igual
        const input = screen.getByRole("textbox");
        expect(input.value).toBe(inputValue);
        // Comprueba que la imagen es igual a la imagen que buscamos
        const image = screen.getByRole("img");
        expect(image.src).toContain(`heroes/marvel-${inputValue}`);

        // screen.debug()
    });

    test('Si el personaje existe, debe devolver un div con una clase isFound', () => {

        const inputValue = "hulk"
        const { container } = render(
            <MemoryRouter initialEntries={[`/search?q=${inputValue}`]} >
                <SearchHeroe />
                <ListSearch />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();

        expect(container.getElementsByClassName("heroe-is-found")).toBeTruthy();
        // screen.debug()
    });

    test('Debe de mostrar un error si no encuentro el heroe', () => {

        const inputValue = "loki"
        const { container } = render(
            <MemoryRouter initialEntries={[`/search?q=${inputValue}`]} >
                <SearchHeroe />
                <ListSearch />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();

        expect(container.getElementsByClassName("heroe-not-found").length).toBe(1);

        // screen.debug()
    });

    test('Realizar la busqueda en el formulario nos lleva a otra pagina con el useNavigate()', () => {

        const inputValue = "loki"

        const { container } = render(
            <MemoryRouter initialEntries={["/"]}>
                <SearchHeroe />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();

        const inputBusqueda = screen.getByLabelText("valor-personaje")
        fireEvent.change(inputBusqueda, { target: { name: "heroe", value: inputValue } })

        const formulario = screen.getByLabelText("buscar-personaje");
        fireEvent.submit(formulario)

        expect(mockUseNavigate).toHaveBeenCalledWith(`heroe/search?q=${inputValue}`);
        // screen.debug()
    });
});