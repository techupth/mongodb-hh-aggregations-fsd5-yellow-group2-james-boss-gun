// Paste the complete MQL here
[
  {
    $group:
    /**
     * _id: The id of the group.
     * fieldN: The first field name.
     */
    {
      _id: "$credit_card_type",
      total_paid: {
        $sum: "$total_price",
      },
    },
  },
]