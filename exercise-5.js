// Paste the complete MQL here
[
  {
    $group: {
      _id: {
        year: {
          $year: "$created_at",
        },
        month: {
          $month: "$created_at",
        },
      },
      total_sales: {
        $sum: "$total_price",
      },
    },
  },
  {
    $sort:
    /**
     * Provide any number of field/order pairs.
     */
    {
      "_id.year": -1,
      "_id.month": -1,
    },
  },
]