import { Button } from './Button'

export function ButtonShowroom() {
  function handleClick() {
    console.log('Save clicked')
  }

  return (
    <div className="main-container">
      <Button title="Confirm changes" onClick={handleClick} size="sm" />
      <Button title="Confirm changes" onClick={handleClick} size="md" />
      <Button title="Confirm changes" onClick={handleClick} size="lg" />

      <Button title="Confirm changes" onClick={handleClick} type="info" />
      <Button title="Confirm changes" onClick={handleClick} type="success" />
      <Button title="Confirm changes" onClick={handleClick} type="error" />

      <Button title="Confirm changes" onClick={handleClick} disabled />
      <Button title="Confirm changes" onClick={handleClick} disabled={false} />
    </div>
  )
}
