function EmptyScreen({message = ""}) {
  return (
    <div className="d-flex align-items-center justify-content-center">
    <h2>{message}</h2>
  </div>
  )
}

export default EmptyScreen