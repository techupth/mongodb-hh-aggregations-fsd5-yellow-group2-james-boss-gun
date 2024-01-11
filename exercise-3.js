// Paste the complete MQL here
[
  {
    $group:
    /**
     * _id: The id of the group.
     * fieldN: The first field name.
     */
    {
      _id: "$size",
      total_amount: {
        $sum: "$total_price",
      },
      total_quantity: {
        $sum: "$quantity",
      },
    },
  },
  {
    $match:
    /**
     * query: The query in MQL.
     */
    {
      _id: "medium",
    },
  },
]