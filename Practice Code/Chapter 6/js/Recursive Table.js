// @ts-check
/** @type {Array} */
let series = [
    {
        title: "Rick and Morty",
        seasons: [{
            number: 1,
            episodes: [
                {
                    number: 1,
                    title: "Pilot"
                },
                {
                    number: 2,
                    title: "Lawnmower Dog"
                },
                {
                    number: 3,
                    title: "Anatomy Park"
                }
            ]
        }]
    },
    {
        title: "See",
        seasons: [{
            number: 1,
            episodes: [
                {
                    number: 1,
                    title: "Godflame"
                },
                { number: 2 }
            ]
        }]
    }
];

/**
 * @param {Array} data
 * @returns {String} table
 */
function drawTable(data) {

    /** @type {Number[]} */
    let colWidths = [];

    /** @type {String} */
    let headerRow = '';

    data.forEach((row, index) => {

        for (const column in row)
            headerRow.indexOf(column) && 
        colWidths.push(getMaxWidth(row.))
    });
    return headerRow.concat('\n', data.map((row, index) => {

        
    }).join('\n'));
}