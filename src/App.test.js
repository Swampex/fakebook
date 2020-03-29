import React from "react";
import ReactDOM from "react-dom";
import {RootApp} from "./App";
import { render } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<RootApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders learn react link', () => {
    const { getByText } = render(<RootApp />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});