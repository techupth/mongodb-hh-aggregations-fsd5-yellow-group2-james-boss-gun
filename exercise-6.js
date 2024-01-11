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
    $match:
    /**
     * Provide any number of field/order pairs.
     */
    {
      _id: {
        year: 2021,
        month: 7,
      },
    },
  },
]