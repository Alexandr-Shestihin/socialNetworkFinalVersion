import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
   test("status from  props should be in the state", () => {
      const component = create(<ProfileStatus status="работает" />);
      //create виртуально создаёт компоненту ProfileStatus

      const instance = component.getInstance();
      //instance-экземпляр объекта ProfileStatus

      expect(instance.state.status).toBe("работает");
   });

   test("after creation <span/> with status should be disolyed", () => {
      const component = create(<ProfileStatus status="работает" />);
      const root = component.root; // root это типо корневая папка ну внутри самой компоненты. Хрен знает...

      const span = root.findByType("span")//Находит единственный вложенный тестовый экземпляр с указанным типом, если findAllByType, то найдёт всё.
      expect(span).not.toBeNull();
   });

   test("after creation <input/> shouldn't be disolyed", () => {
      const component = create(<ProfileStatus status="работает" />);
      const root = component.root;
      expect(() => {
         let input = root.findByType("input");
      }).toThrow();
   });

   test("after creations <span/> correct status", () => {
      const component = create(<ProfileStatus status="работает" />);
      const root = component.root;
      const span = root.findByType("span")//Находит единственный вложенный тестовый экземпляр с указанным типом, если findAllByType, то найдёт всё.
      expect(span.children[0]).toBe("работает");
   });

   test("input should be displayed in editMode instead of span", () => {
      const component = create(<ProfileStatus status="работает" />);
      const root = component.root;
      const span = root.findByType("span")//Находит единственный вложенный тестовый экземпляр с указанным типом, если findAllByType, то найдёт всё.
      span.props.onClick();
      const input = root.findByType('input');
      expect(input.props.value).toBe("работает");
   });

   test("input should be displayed in editMode instead of span", () => {
      const component = create(<ProfileStatus status="работает" />);
      const root = component.root;
      const span = root.findByType("span")//Находит единственный вложенный тестовый экземпляр с указанным типом, если findAllByType, то найдёт всё.
      span.props.onClick();
      const input = root.findByType('input');
      expect(input.props.value).toBe("работает");
   });

   test("callback should be called", () => {
      const mockCallback = jest.fn();
      const component = create(<ProfileStatus status="работает" thunkUpdateStatus={mockCallback} />);

      const instance = component.getInstance();
      instance.deactivateEditMode();
      expect(mockCallback.mock.calls.length).toBe(1);
   });
});