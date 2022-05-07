

export default class MyParser extends Parser {
  parse(fetcherResult, input, context) {
    const table = this.createTable('Earthquake Data')
    table.setId('EarthquakeData')
    table.addColumnHeaders([
      {
        id: 'id',
        dataType: 'string',
      },
      {
        id: 'mag',
        alias: 'magnitude',
        dataType: 'float',
      },
      {
        id: 'title',
        alias: 'title',
        dataType: 'string',
      },
      {
        id: 'location',
        dataType: 'geometry',
      },
    ])

    table.addRows(
      fetcherResult.features.map((row) => {
        return { id: row.id, mag: row.properties.mag, title: row.properties.title, location: row.geometry }
      })
    )
    return this.container
  }
}

				globalRefs["MyParser"] = MyParser