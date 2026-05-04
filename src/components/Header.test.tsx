import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  it("labels the digital site intelligence navigation item as BuildaScan", () => {
    const html = renderToStaticMarkup(<Header />);

    expect(html).toContain("BuildaScan");
    expect(html).not.toContain(">Digital Site Intelligence<");
  });
});
