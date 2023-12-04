import React, { useEffect, useState, useRef } from 'react'

import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CbTab from './CbTab';
import { useDispatch, useSelector } from 'react-redux';
import { addDepencesGroup, addGroup } from '../../redux/calculateurBudjetSlice';
import SankeyDiagramme from './chart/SankeyDiagramme';
import SankeyRecharts from './chart/SankeyRecharts';
import { step1, step2, step3, _revenus } from '../../utils/sankeyData/steps';
import { getTotalOfCategory, rest, tauxEpargne, tauxEpargnePossible, } from '../../utils/sankeyData/sankeyCalucaltors';
import { getTotalOfArrayObject } from '../../utils/sankeyData/getTotalOfData';




function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
const StyledTabs = styled((props) => (
    <Tabs

        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab
    style={{ minWidth: '32%' }}
    disableRipple {...props} />)(
        ({ theme }) => ({

            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
                color: '#fff',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        }),
    );



const CalculateurBudget = () => {
    const sankeyRef = useRef(null)
    const dispatch = useDispatch()

    const revenus = useSelector(state => state.calculateurBudjet.revenus)
    const investissements = useSelector(state => state.calculateurBudjet.investissements)
    const depences = useSelector(state => state.calculateurBudjet.depences)
    const data = [
        ["Budget", "Investissements", "Dépenses"],
        ...step1(revenus, investissements, depences),
        ...step2({ investissements, depences }),
        ...step3({ investissements, depences })
    ]


    const [value, setValue] = React.useState(0);
    const totalRev = getTotalOfArrayObject(revenus)
    const totalInv = getTotalOfCategory(investissements)
    const totalDep = getTotalOfCategory(depences)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const ajouterCategorie = (type) => {
        switch (type) {
            case 'investissements':
                dispatch(addGroup())
                break;

            case 'depences':

                dispatch(addDepencesGroup())

            default:
                break;
        }
    }


    return (
        <>
            <div className='w-full h-fit '>
                {/* <h1 className='text-center text-forth font-bold text-2xl mb-20'>Calculateur de budget</h1> */}
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Revenus" {...a11yProps(0)} />

                    <StyledTab label="Investissements" {...a11yProps(1)} />

                    <StyledTab label="Dépenses" {...a11yProps(2)} />

                </StyledTabs>



                {value === 0 && <CbTab type='revenus' data={revenus} />}
                {/* {value === 1 && <CbTab type='invistissements' data={inverstissements} />} */}
                {value === 1 && investissements.map((inv) => (
                    <CbTab key={inv.id} type='investissements' data={inv} dataLength={investissements.length} />
                ))}
                {value === 2 && depences.map((dep) => (
                    <CbTab key={dep.id} type='depences' data={dep} dataLength={depences.length} />
                ))}

                {
                    value !== 0 && <div className='w-[100%] h-fit flex justify-center   mx-auto'>
                        <button


                            onClick={() => {
                                const type = value === 1 ? 'investissements' : 'depences'
                                ajouterCategorie(type)
                            }}


                            className='text-forth text-2xl font-bold 	
                    opacity-60
                     w-50 h-30 px-4 py-2 mr-5 rounded-xl hover:opacity-80
                     transition duration-150 ease-in-out'>Ajouter une catégorie +</button>
                    </div>
                }

                <div className='w-[60%] h-fit flex justify-end   mx-auto'>
                    <button

                        onClick={() => {

                            value < 2 ? setValue(value + 1) : sankeyRef.current.scrollIntoView({ behavior: 'smooth' });
                        }}

                        className='text-forth text-2xl font-bold bg-gold-500 from-white	
                     w-50 h-30 px-4 py-2 mr-5 rounded-xl hover:bg-gold-400 transition duration-150 ease-in-out'>Suivant</button>
                </div>


            </div>

            <div className=' w-[90%] my-10 mx-auto '>
                <p className=' text-white text-center text-xl'>
                    {
                        `
                        Votre taux d'épargne est de ${tauxEpargne(revenus, investissements)} (taux d'épargne possible: ${tauxEpargnePossible(revenus, depences)} ). Vous avez un revenu total de ${totalRev} M A D, des dépenses de ${totalDep} M A D et investissez ${totalInv} M A D tous les mois, ${rest(totalRev, totalInv, totalDep)}.
                        `
                    }
                </p>
            </div>
            <div className='w-full h-fit mt-10  ' id='sankey' ref={sankeyRef}>
                <div className=' w-[90%] h-full my-4 mx-auto p-10    '>
                    <SankeyDiagramme data={data} />
                    {/* <SankeyRecharts /> */}
                </div>
            </div >
        </>
    )
}

export default CalculateurBudget


