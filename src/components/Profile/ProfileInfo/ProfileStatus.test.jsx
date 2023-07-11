import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer'; // ES6

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const testStatusStr = '...OLOLO...';
      const component = TestRenderer.create(<ProfileStatus status={testStatusStr} />);
      let statusInSpan = component.toJSON().children[0].children[1]
      expect(statusInSpan).toBe(undefined);
    });

    
  });