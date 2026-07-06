// Product catalog — the server is the source of truth for prices.
// The frontend only displays what this file (via /api/products) says,
// and every order total is recalculated here on the server, never trusted
// from the browser. Edit prices here, restart the server, done.
//
// unit: "kg" or "pc" (piece / dona / шт)
// price: in UZS (so'm)

const PRODUCTS = [
  { id: "apple_fuji", emoji: "🍎", unit: "kg", price: 35000 },
  { id: "mango", emoji: "🥭", unit: "pc", price: 30000 },
  { id: "orange_big", emoji: "🍊", unit: "kg", price: 30000 },
  { id: "pineapple", emoji: "🍍", unit: "pc", price: 60000 },
  { id: "coconut", emoji: "🥥", unit: "pc", price: 50000 },
  { id: "nashi_pear", emoji: "🍐", unit: "kg", price: 18000 },
  { id: "grapefruit", emoji: "🟠", unit: "kg", price: 50000 },
  { id: "lemon", emoji: "🍋", unit: "kg", price: 35000 },
  { id: "kiwi", emoji: "🥝", unit: "kg", price: 60000 },
  { id: "mandarin", emoji: "🍊", unit: "kg", price: 30000 },
  { id: "lime", emoji: "🟢", unit: "kg", price: 90000 },
];

const PRODUCTS_BY_ID = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

module.exports = { PRODUCTS, PRODUCTS_BY_ID };
