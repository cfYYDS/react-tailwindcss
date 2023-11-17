import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare}from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
<div>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
  <p className='py-4'>Lorem,ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
    <div className='flex justify-between md:w-[75%] my-6'>
    <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaDribbbleSquare size={30}/>
    </div>
    </div>    
    <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='footer-li'>Analytics</li>
                <li className='footer-li'>Marketing</li>
                <li className='footer-li'>Commerce</li>
                <li className='footer-li'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='footer-li'>Pricing</li>
                <li className='footer-li'>Documentation</li>
                <li className='footer-li'>Guides</li>
                <li className='footer-li'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='footer-li'>About</li>
                <li className='footer-li'>Blog</li>
                <li className='footer-li'>Jobs</li>
                <li className='footer-li'>Press</li>
                <li className='footer-li'>Careers</li>
            </ul>
        </div>  <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='footer-li'>Claim</li>
                <li className='footer-li'>Policy</li>
                <li className='footer-li'>Terms</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer