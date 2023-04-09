import {render} from "@testing-library/react";
import { store } from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import React from "react";
import NotFound from "../../components/NotFound";


describe("NotFound", () => {
    it("should render the NotFound component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NotFound/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should display all elements in 404 page", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NotFound/>
                </BrowserRouter>
            </Provider>
        );

        const headingElement = component.getByTestId("heading");
        const descriptionlElement = component.getByTestId("description");

        expect(headingElement.textContent).toBe("Error 404");
        expect(descriptionlElement.textContent).toBe("Page not found");

    });
});
