const sample = [
    {
      id: 1,
      startTime: 180,
      endTime: 220
    },
    {
      id: 2,
      startTime: 0,
      endTime: 120
    },
    {
      id: 3,
      startTime: 110,
      endTime: 150
    }
  ]
  /**
   * @typedef {{
   *  id: number,
   *  startTime: number,
   *  endTime: number
   * }} FormattedObject
   * 
   * 
   * Find first non-blocking slot
   * @param { FormattedObject[] } input
   * @param { number } duration
   * @return { { startTime: number, endTime: number } }
   */
  function handler( input, duration ) {
    /* Sorted by startTime - ASC */
    const sorted = input.sort( (a, b) => a.startTime - b.startTime );
    const timeLimit = 1440;
  
    for( let i = 0; i < sorted.length - 1; i++ ) {
      const current = sorted[i];
      const next = sorted[i + 1];
      const isNotOverlap = current.endTime + duration <= next.startTime;
      const isNotExceedTimeLimit = current.endTime + duration <= timeLimit
  
      if (isNotOverlap && isNotExceedTimeLimit) {
        return {
          startTime: current.endTime,
          endTime: current.endTime + duration
        }
      }
    }
    
    const lastChild = sorted[sorted.length - 1];
    const isLastChildValidWithDuration = lastChild.endTime + duration <= timeLimit;
  
    if (!isLastChildValidWithDuration) {
       return null;
    }
  
    return {
      startTime: lastChild.endTime,
      endTime: lastChild.endTime + duration
    }
  }
  
  console.log( 'non-blocking', handler(sample, 30) ) 
  console.log( 'non-blocking', handler(sample, 60) ) 