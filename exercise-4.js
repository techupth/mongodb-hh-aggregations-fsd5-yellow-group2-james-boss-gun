// Paste the complete MQL here
[
  {
    $group:
    /**
     * _id: The id of the group.
     * fieldN: The first field name.
     */
    {
      _id: {
        year: {
          $year: "$created_at",
        },
      },
      total_price_per_year: {
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
    },
  },
]