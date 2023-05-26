# Recursive Table Algorithm

## drawTable(data)

1. Assign `getHeaders(data)` to `headers`.

1. Assign `getColWidths(data, headers)` to `colWidths`.

1. Assign `sum(colWidths)` to `tableWidth`.

1. Concatenate the elements of `headers` to `table`.

1. For each object in `data`,

   1. Concatenate a row of `tableWidth` space characters to `table`.

1.

## getColWidths(data, headers)

1. For each `header` in `headers`,

   1. Assign `header.length` to `colWidths[index]`

## getHeaders(data)

1. For each `object` in `data`,

   1. For each `column` in `object`,

      1. If `column` does not exit in `headers`, add `column` to `headers`

   1. return `headers`
