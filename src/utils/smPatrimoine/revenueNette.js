// const repBourseFirst = repBourseCalc(50, 100000, 50000, 8, 3, true)
// const prevRepartistionBourse = 123059.20
// const repBourseLast = repBourseCalc(50, 100000, prevRepartistionBourse, 8, 3)
// const versBourse = versBourseCalc(6000, 50)
// const investBourseLast = investBourseCalc(versBourse, 6000, 50, 90301.17, 8, 3)
// const versBourseCumuleLast = versBourseCumuleCalc(versBourse, 57000)
// // console.log('invest bourse last : ', investBourseLast)
// // console.log('vers bourse cumule last: ', versBourseCumuleLast)


// const autreFisrt = autreFisrtCalc(100000, repBourseFirst)
// const autreLast = autreCalc(72054.22, 5, 3)
// const versBourseLast = versBourseCalc(6000, 50)
// const versAutreLast = versAutreCalc(6000, versBourseLast)

// const versAutreCumuleLast = versAutreCumuleCalc(versAutreLast, 57000)

// const investAutreLast = investAutreCalc(68147.54, 5, 3, 50, 6000)


// const pmvBourse = pmvBourseCalc(repBourseFirst, repBourseLast, investBourseLast, versBourseCumuleLast)
// const pmvAutre = pmvAutreCalc(autreFisrt, autreLast, versAutreCumuleLast, investAutreLast)

// const pmvBourseNette = pmvBourseNetteCalc(pmvBourse, 17.20)
// const pmvAutreNette = pmvAutreNetteCalc(pmvAutre, 30)
// const plusValueNette = plusValueNetteCalc(pmvBourseNette, pmvAutreNette)

// =AG9+AG10+AA26+AB26
export const valeurNetteCalc = (pActuel, versementAcumuleLast, pmvBourseNette, pmvAutreNette) => {
       return pActuel + versementAcumuleLast + pmvBourseNette + pmvAutreNette
}
export const revenuMensuelCalc = (txRetrait, valeurNette) => {
       return valeurNette * (txRetrait / 100) / 12
}