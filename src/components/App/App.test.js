import React from "react";
import { shallow } from "enzyme";
import { ResultsTable } from "../ResultsTable/ResultsTable";
import { mockResult } from "./App";

describe("The SwissVote app", () => {
  it("checks that the ResultsTable component renders content from its props", () => {
    const tableComponent = shallow(<ResultsTable {...mockResult} />);
    expect(
      tableComponent.contains(<caption>{mockResult.description.en}</caption>)
    ).toEqual(true);
  });
});
