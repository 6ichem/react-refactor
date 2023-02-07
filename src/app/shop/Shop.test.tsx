import Shop from "./Shop";
import * as ReactDOM from "react-dom";
import "@testing-library/jest-dom";

describe("Shop Tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Shop />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders initialy", () => {
    const shopContainer = container.querySelector(
      "[data-test='shopContainer']"
    );

    expect(shopContainer).toBeInTheDocument();
  });
});
