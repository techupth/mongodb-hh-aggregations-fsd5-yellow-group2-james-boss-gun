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
    $match: {
      "_id.year": 2021,
    },
  },
  {
    $sort: {
      total_sales: 1,
    },
  },
  {
    $limit: 1,
  },
]