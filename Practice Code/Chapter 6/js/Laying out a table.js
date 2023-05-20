function drawTable(rows) {
  const cellWidths = rows.map((row) => {
    const widths = [];
    for (let attribute in row) widths.push(row[attribute].toString().length);

    return widths;
  });

  rows.forEach(row => {
    for (const attribute)
  });

  return cellWidths;
}
