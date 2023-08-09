import React from 'react'
import ButtonsReport from './ButtonsReport'

const PageReport = ({ children }) => {
    let idPage = 'pageReport'

    const savePdf = () => {}

    return (
        <div id={idPage}>
            <ButtonsReport savePdf={savePdf} />
            {children}
        </div>
    )
}

export default PageReport
