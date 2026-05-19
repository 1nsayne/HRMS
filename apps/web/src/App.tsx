import { AppProviders } from './app/providers/AppProviders'
import { AppShell } from './app/layout/AppShell'

function App() {
  return (
    <AppProviders>
      <AppShell />
    </AppProviders>
  )
}

export default App
