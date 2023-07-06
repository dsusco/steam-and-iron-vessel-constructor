export default {
  Ready: {
    nextCondition: 'Damaged'
  },
  Damaged: {
    nextCondition: 'Crippled',
    prevCondition: 'Ready'
  },
  Crippled: {
    prevCondition: 'Damaged'
  }
}
