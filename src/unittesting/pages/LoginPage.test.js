
import LoginPage from "../../pages/LoginPage";
import { store } from "../../store";
import {fireEvent,  render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import React from "react";
import { handleInitialData } from "../../services/pollService";

describe("LoginPage", () => {
    it("should render the loginpage component", () => {
        const component = render (
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('should clear user and password after clicking submit button', async () => {
        await store.dispatch(handleInitialData());

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage/>
                </BrowserRouter>
            </Provider>
        );

        const loginHeadingElement = wrapper.getByTestId("employee-heading");
        const usernameInputElement = wrapper.getByTestId("username");
        const passwordInputElement = wrapper.getByTestId("password");
        const submitButtonElement = wrapper.getByTestId("submit");
        expect(loginHeadingElement).toBeInTheDocument();
        expect(usernameInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
        expect(submitButtonElement).toBeInTheDocument();

        fireEvent.change(usernameInputElement, {target: {value: 'test'}});
        fireEvent.change(passwordInputElement, {target: {value: 'wrongpassword'}});
        expect(usernameInputElement.value).toBe("test");
        expect(passwordInputElement.value).toBe("wrongpassword");
        fireEvent.click(submitButtonElement); 
        // confirm User stays on page
        expect(loginHeadingElement).toBeInTheDocument();
        expect(usernameInputElement.value).toBe("");
        expect(passwordInputElement.value).toBe("");
    });
});
