import { COMMERCE } from "./content";

export const money = (n) =>
  "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/**
 * Cart math, including the owner-friendly rules:
 *  - mix-a-case discount (10% off when 12+ items)
 *  - free local delivery over a threshold, flat fee otherwise
 *  - estimated MD tax (informational)
 */
export function computeTotals(items, fulfillment = "pickup") {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const qtyTotal = items.reduce((s, i) => s + i.qty, 0);

  const caseEligible = qtyTotal >= COMMERCE.caseSize;
  const discount = caseEligible ? subtotal * COMMERCE.caseDiscount : 0;
  const afterDiscount = subtotal - discount;

  let delivery = 0;
  let freeDeliveryRemaining = 0;
  if (fulfillment === "delivery") {
    if (afterDiscount >= COMMERCE.freeDeliveryOver || afterDiscount === 0) {
      delivery = 0;
    } else {
      delivery = COMMERCE.deliveryFee;
      freeDeliveryRemaining = COMMERCE.freeDeliveryOver - afterDiscount;
    }
  }

  const tax = afterDiscount * COMMERCE.taxRate;
  const total = afterDiscount + delivery + tax;

  return {
    subtotal,
    qtyTotal,
    caseEligible,
    discount,
    delivery,
    tax,
    total,
    freeDeliveryRemaining,
  };
}
