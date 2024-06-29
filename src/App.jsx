
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Router from './router/router';
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import AOS from 'aos';
AOS.init();


const customTheme = createTheme({

  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#fff',
          '&::placeholder': {
            color: '#fff !important'

          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          color: '#fff',
          fontSize: 20,
          '&::placeholder': {
            color: '#fff !important'

          }

        }
      }
    },

  }
})


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={customTheme} >
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
