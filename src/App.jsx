import { useState } from 'react'
import QuestionnaireSlider from './components/Questionnaire/QuestionnaireSlider'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  return (
    <div className=' app min-h-screen'>
      <div className=" min-w-full  h-fit p-4 ">
        <h1 className='text-gold-500 mb-10 max-w-fit rounded-md  my-2 mx-5 font-bold text-3xl tracking-wide align-middle	'>My Flousy</h1>

         <QuestionnaireSlider />
      </div> 
     

      
      
    </div>
  )
}

export default App
