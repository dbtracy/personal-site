import React from 'react'

import pdfRes from './images/resume.pdf'

export default function Resume() {
  return (
    <div>
      < iframe title="resume" src={pdfRes} alt="resume" width="1000" height="1400" />
    </div>
  )
}
