import {
  allOffers,
  dsiAddOns,
  type AddOn,
  type Offer,
  type OfferCategory,
} from "./catalog";

const offerMap = new Map(allOffers.map((offer) => [offer.id, offer]));
const exactAddOnMap = new Map(
  dsiAddOns
    .filter((addOn) => addOn.exactPrice && addOn.price !== undefined)
    .map((addOn) => [addOn.id, addOn]),
);

export function getBookableOffersByCategory(category: OfferCategory): Offer[] {
  return allOffers.filter(
    (offer) => offer.category === category && !offer.quoteOnly && offer.price !== undefined,
  );
}

export function getExactPriceAddOns(): AddOn[] {
  return dsiAddOns.filter((addOn) => addOn.exactPrice && addOn.price !== undefined);
}

export function getAvailableAddOnsForOffer(offerId: string): AddOn[] {
  const offer = offerMap.get(offerId);
  const includedAddOnIds = new Set(offer?.includedAddOnIds ?? []);

  return getExactPriceAddOns().filter((addOn) => !includedAddOnIds.has(addOn.id));
}

export function getOfferById(id: string): Offer | undefined {
  return offerMap.get(id);
}

export function isQuotedOffer(id: string): boolean {
  return offerMap.get(id)?.quoteOnly ?? false;
}

export function calculateBookableTotal(
  offerId: string,
  addOnIds: string[] = [],
): number | null {
  const offer = offerMap.get(offerId);

  if (!offer || offer.quoteOnly || offer.price === undefined) {
    return null;
  }

  const addOnTotal =
    offer.category === "dsi"
      ? addOnIds.reduce((sum, id) => sum + (exactAddOnMap.get(id)?.price ?? 0), 0)
      : 0;

  return offer.price + addOnTotal;
}
