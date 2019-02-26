const {
  performance,
  PerformanceObserver
} = require('perf_hooks')
const fs = require('fs')

const readFile = path => fs.readFileSync(path, 'utf8')

const examplePizza = readFile('./a_example.in')
const smallPizza = readFile('./b_small.in')
const mediumPizza = readFile('./c_medium.in')
const bigPizza = readFile('./d_big.in')

/**
 * Slice pizza so that each slice will have the 
 * right amount of tomatoes and mushrooms
 * 
 * @example
 * -> pizza(`3 5 1 6
 * TTTTT
 * TMMMT
 * TTTTT`)
 * 
 * -> `3
 * 0 0 2 1
 * 0 2 2 2
 * 0 3 2 4`
 * 
 * @param {String} pizza pizza
 * @returns {String} pizzaSlices
 */
const slicer = pizza => {
  const dataset = pizza.trim().split('\n')
  const [
    totalRows,
    totalColumns,
    minimumIngredientsPerSlice,
    maximumCellsPerSlice
  ] = dataset.shift().split(' ') // remove first line of the dataset


  console.log(`Total rows:                       R = %d`, totalRows)
  console.log(`Total columns:                    C = %d`, totalColumns)
  console.log(`Minimum ingredients per slice:    L = %d`, minimumIngredientsPerSlice)
  console.log(`Maximum cells per slice:          H = %d`, maximumCellsPerSlice)

  // @TODO: Your algorthim here
  console.log('Dataset:', dataset)
  

}

// measure how many miliseconds (and microseconds) the script
// takes to solve a problem
const measureRuntime = func => {
  const wrapped = performance.timerify(func)

  const obs = new PerformanceObserver(list => {
    const runtime = list.getEntries()[0].duration
    
    console.log('==========================================')
    console.log('Total execution time: \u001b[32m%d ms\u001b[39m', runtime)
    console.log('==========================================')

    obs.disconnect()
  })

  obs.observe({ entryTypes: ['function'] })
  
  // A performance timeline entry will be created
  wrapped()
}

// after solving this one, feel free to try with other pizzas 
measureRuntime(() => slicer(examplePizza))
// measureRuntime(() => slicer(smallPizza))
// measureRuntime(() => slicer(mediumPizza))
// measureRuntime(() => slicer(bigPizza))




