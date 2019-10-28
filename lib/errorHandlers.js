function errorHandler(err, req, res, next) {
  
  if (err.message === 'Not Found') return 
  res.status(404).json({ message: 'Not Found' })

  if (err.message === 'Unauthorized') return 
  res.status(401).json({ message: 'Unauthorized' })

  if (err.name === 'TokenExpiredError') return
  res.status(401).json({ message: 'Token Expired'})




}

module.exports = errorHandler