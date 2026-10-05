import React from 'react'
import logo from "../assets/footer-logo.png"
import { ArrowBigUp, ArrowBigUpDash, ArrowBigUpIcon, LucideAArrowUp } from 'lucide-react'
function Footer() {
  return (
    <div className="bg-blue-950 py-10 px-6">
      <div className="text-white py-8 px-2 grid grid-cols- md:grid-cols-2 lg:grid-cols-4 gap-4" >

        <div>
          <img src={logo} alt="youcan-logo"
            width={150} />
          <div> </div>
          <div>Immigration Support</div>
        </div>

        <div><span className='font-extrabold'>Available Opportunities </span><br />
          <ul>
            <li>Worki in Poland</li>
            <li>Work in Slovakia</li>
            <li>Work in UK</li>
            <li>Work in Germany</li></ul>
        </div>
        <div><b>Legal Information</b><br />
          <p>
            YOU CAN LEGAL SERVICES LTD
            Company Number 164873468 For verification, please visit <a href='https://find-and-update.company-information.service.gov.uk/company/16872568' blank>this link</a> <br />
            Registration address - 167-169 Great Portland Street, London, England, W1W 5PF
            (This serves as a registerd address; for in-office meetings, please use our repreentative office in Poland.)        </p>
        </div>

        <div className='py-4'><b><br />Partnership</b>
          <p>For all partnership and collaboration inquireies, please contact us</p></div>



      </div>
      <div className='text-blue-100'>
        All Rights Reserved
      </div>
      {/* <a href='/'>
      <ArrowBigUp size={50} className='fixed text-white rounded right-5 bottom-2.5 justify-end bg-blue-700' /></a> */}
    </div>
  )
}

export default Footer