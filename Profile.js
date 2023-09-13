import React from 'react'
import "./Profile.css"
import Header from '../Header'
import DropDown from './DropDown'
import {  signOut } from "firebase/auth";



import { useSelector } from 'react-redux';



const Profile = () => {


  const language = useSelector((store) => store.langs.language)

  



  return (
    <div className='profile_page-Section'>
       

       
            <DropDown/>
       
    </div>
  )
}

export default Profile