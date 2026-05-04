import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("home page", () => {
  it("uses the requested builder-grade sub-headline", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain(
      "Builder-grade inspections and digital evidence for buyers, owners, builders, and insurers.",
    );
  });

  it("does not show the Citadel parent-brand band in the middle of the page", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).not.toContain("Citadel Building Group");
  });
});
