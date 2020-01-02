module.exports = () => {
  console.log('log plugin')
  return () => {
    console.log('inner log')
  }
}
