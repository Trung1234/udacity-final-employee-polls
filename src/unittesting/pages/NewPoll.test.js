import {fireEvent, render} from "@testing-library/react";
import { store } from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import React from "react";
import NewPollPage from "../../pages/NewPollPage";

describe("NewPolPage", () => {
    it("should render the NewPolPage component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPollPage/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should display all elements in Poll page", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPollPage/>
                </BrowserRouter>
            </Provider>
        );

        const firstOptionLabelElement = component.getByTestId("firstOptionLabel");
        const firstOptionInputElement = component.getByTestId("firstOption");
        const secondOptionLabelElement = component.getByTestId("secondOptionLabel");
        const secondOptionInputElement = component.getByTestId("secondOption");
        const submitButtonElement = component.getByTestId("submit");

        expect(firstOptionLabelElement.textContent).toBe("First Option");
        expect(secondOptionLabelElement.textContent).toBe("Second Option");
        expect(submitButtonElement.textContent).toBe("Submit");

        fireEvent.change(firstOptionInputElement, {target: {value: 'First'}});
        fireEvent.change(secondOptionInputElement, {target: {value: 'Second'}});
        expect(firstOptionInputElement.value).toBe("First");
        expect(secondOptionInputElement.value).toBe("Second");
    });
});
