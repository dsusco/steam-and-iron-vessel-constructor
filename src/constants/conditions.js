const CONDITIONS = {
  ready: {
    nextCondition: 'damaged'
  },
  damaged: {
    nextCondition: 'crippled',
    prevCondition: 'ready'
  },
  crippled: {
    prevCondition: 'damaged'
  }
}

export default CONDITIONS
