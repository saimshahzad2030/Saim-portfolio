import Copyright from '@/components/Copyright/Copyright'
import Expertise from '@/components/Expertise/Expertise'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const ExpertisePage = () => {
  return (
   <>
   <Navbar  selectedLink={'expertise'}/>
   <Expertise/>
   <Footer/>
   <Copyright/>
   </>
  )
}

export default ExpertisePage