function ExportCSV({ transactions }) {

  const exportData = () => {

    const headers = [
      "Description",
      "Amount",
      "Category",
      "Payment Method",
      "Date",
    ];

    const rows = transactions.map((item) => [
      item.description,
      item.amount,
      item.category,
      item.paymentMethod,
      item.date,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "transactions.csv";

    link.click();

    URL.revokeObjectURL(url);

  };

  return (

    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <button
        className="export-btn"
        onClick={exportData}
      >
        📤 Export CSV
      </button>

    </div>

  );
}

export default ExportCSV;