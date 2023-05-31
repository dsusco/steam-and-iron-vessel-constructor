export default {
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
