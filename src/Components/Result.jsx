import react, {useState} from 'react'

const summation =(statement)=>{
    let firstOperand =Number(statement.substr(0, statement.indexOf('+')))
    let secondOperand =Number(statement.substr(statement.indexOf('+')+1, statement.length))
    return firstOperand+secondOperand
}

const subtraction =(statement)=>{
    let firstOperand =Number(statement.substr(0, statement.indexOf('-')))
    let secondOperand =Number(statement.substr(statement.indexOf('-')+1, statement.length))
    return firstOperand-secondOperand
}

const Result = (props)=>{

    let {statement,setResult} =props
    statement =statement.join('')
    return (
        <>
       {
        setResult(statement.includes('+')? summation(statement) :statement.includes('-') ? subtraction(statement): null)
       }
        </>
    )
}
export default Result