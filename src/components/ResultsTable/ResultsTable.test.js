import React from "react";
import { shallow } from "enzyme";
import { ResultsTable } from "./ResultsTable";
import { mockResult } from "../../mock/mockResults";

const tableComponent = shallow(<ResultsTable {...mockResult} />);

describe("ResultsTable component", () => {
  it("checks content renders from its props", () => {
    expect(
      tableComponent.contains(<caption>{mockResult.description.en}</caption>)
    ).toEqual(true);
    expect(
      tableComponent.contains(<td>{mockResult.results[0].canton}</td>)
    ).toEqual(true);
    expect(
      tableComponent.contains(<td>{mockResult.results[0].yes}</td>)
    ).toEqual(true);
    expect(
      tableComponent.contains(<td>{mockResult.results[0].no}</td>)
    ).toEqual(true);
  });
});
