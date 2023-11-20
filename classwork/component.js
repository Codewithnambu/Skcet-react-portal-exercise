
import React from 'react'
import ThemeProvider from './components/ThemeProvider'
import ThemeContext from './components/ThemeContext'
import ThemedComponent from './components/ThemedComponent'
function App() {
  return (
    <>
      <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider>
    </>
  )
}

