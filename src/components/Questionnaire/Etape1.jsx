import React from 'react'
import Etape from './Etape'

const Etape1 = () => {
  return (
      <Etape title={'Dites nous plus sur vous'}>
          <div className='p-3 flex flex-col gap-8 '>
                <h2 className='text-forth text-2xl font-bold flex align-middle'>
                    Simuler votre independance financiere comme un pro
                </h2>
                <p className='text-forth opacity-60 '>
                    Simulez votre indépendance financière en établissant un budget, diversifiant vos placements, restant discipliné, et maintenant une éducation financière continue. Adoptez une approche proactive pour assurer le succès.
                </p>
        </div>
    </Etape>
  )
}

export default Etape1