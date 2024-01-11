// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { month: "$created_at", year: "$created_at" },
      total_sales: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);

หรือ;

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { month: "$created_at", year: "$created_at" },
      total_sales: { $sum: "$total_price" },
    },
  },
  { $sort: { "-id_year": -1, "_id.month": -1 } },
]);
