import { useEffect, useState } from 'react'
import { Card } from './Card'

export function CardShowroom() {
  const [theme, setTheme] = useState('theme1')

  const toggleTheme = () => {
    setTheme(theme === 'theme1' ? 'theme2' : 'theme1')
  }

  useEffect(() => {
    const backgroundColor = `var(--background-color-${theme})`
    const fontColor = `var(--font-color-${theme})`
    document.body.style.setProperty('--background-color', backgroundColor)
    document.body.style.setProperty('--font-color', fontColor)
  }, [theme])

  return (
    <>
      <Card title="This is a title" subtitle="This is a subtitle." />

      <button type="button" onClick={toggleTheme}>
        Toggle theme (current theme: {theme})
      </button>
    </>
  )
}
