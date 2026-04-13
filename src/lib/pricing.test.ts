import { describe, expect, it } from "vitest";
import {
  calculateBookableTotal,
  getAvailableAddOnsForOffer,
  getBookableOffersByCategory,
  isQuotedOffer,
} from "./pricing";

describe("pricing catalog", () => {
  it("returns the fixed-price BuildaCheck offers for booking", () => {
    expect(getBookableOffersByCategory("buildacheck")).toEqual([
      expect.objectContaining({
        id: "pre-purchase-building-inspection",
        price: 399,
      }),
      expect.objectContaining({
        id: "new-construction-stage-inspection",
        price: 449,
      }),
      expect.objectContaining({
        id: "practical-completion-handover",
        price: 499,
      }),
      expect.objectContaining({
        id: "vcat-insurance-evidence-pack",
        price: 899,
      }),
    ]);
  });

  it("calculates exact totals for bookable DSI packages and add-ons", () => {
    expect(
      calculateBookableTotal("dsi-complete-intelligence", [
        "fast-track-delivery",
        "insurance-vcat-pack",
      ]),
    ).toBe(997);
  });

  it("marks combined ecosystem packages as quoted work", () => {
    expect(isQuotedOffer("buildacheck-buildascan-essentials")).toBe(true);
  });

  it("does not offer duplicate add-ons when a DSI package already includes them", () => {
    expect(
      getAvailableAddOnsForOffer("dsi-complete-intelligence").map((addOn) => addOn.id),
    ).not.toContain("thermal-intelligence-pack");
  });
});
