import React from "react";
import {create} from "react-test-renderer";
import ProfileInfo from "./Avatar";

describe("Avatar component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileInfo status={"status_value"} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("status_value");
    });

    test("span should render", () => {
        const component = create(<ProfileInfo status={"status_value"} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("input shouldn't render", () => {
        const component = create(<ProfileInfo status={"status_value"} />);
        const root = component.root;
        expect(() => {
            root.findByType("input")
        }).toThrow();
    });

    test("span should contain text from props", () => {
        const component = create(<ProfileInfo status={"status_value"} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("status_value");
    });

    test("span should transform to input after user action", () => {
        const component = create(<ProfileInfo status={"status_value"} />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onClick({target: {value: "status_value"}});
        let input = root.findByType("input");
        expect(input.props.defaultValue).toBe("status_value");
    });

    test("setStatus should be called 1 time after toggleEditMode", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileInfo status={"status_value"} setStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.toggleEditMode({target: {value: "status_value1"}});
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});