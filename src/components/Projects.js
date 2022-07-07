import React from 'react'
import "../my.css"
export default function Projects() {
  return (
    <div className='container'>
     <h1 className="font-weight-bold st-font" style={{color:"yellow",textShadow:"1px 1px 2px violet",fontFamily:"Lobster,cursive",borderBottom:"5px solid white"}}>MY PROJECTS</h1>
<div className="list-group mt-5">
    <a href="https://anubhavchakrabortynits.github.io/tictactoe.github.io/"  rel='noreferrer' className="projects list-group-item list-group-item-action" aria-current="true" target="_blank" >
     Tic-Tac_Toe
    </a>
    <a href="https://anubhavchakrabortynits.github.io/rotationggallery/" rel='noreferrer' className="projects list-group-item list-group-item-action" target="_blank" >3D Image Rotating Gallery</a>
    <a href="https://anubhavchakrabortynits.github.io/calculatoramerican/"  rel='noreferrer' className="projects list-group-item list-group-item-action " target="_blank">Calculator
     </a>
    <a href="https://anubhavresume1.herokuapp.com/"  rel='noreferrer' className="projects list-group-item list-group-item-action " target="_blank" >Portfolio In Django</a>
    <a href="https://github.com/AnubhavChakrabortynits"  rel='noreferrer' className="projects list-group-item list-group-item-action " target="_blank" >GitHub</a>
    <a href="https://www.hackerrank.com/chakrabortyanub2"  rel='noreferrer' className="projects list-group-item list-group-item-action " target="_blank" >HackerRank</a>
    
    <a href="https://auth.geeksforgeeks.org/user/chakrabortyanubhav0/profile"  rel='noreferrer' className="projects list-group-item list-group-item-action " target="_blank" >GeekForGeeks</a>
    <a href="https://leetcode.com/AnubhavChakraborty/"  rel='noreferrer' className="projects list-group-item list-group-item-action " target="_blank" >LeetCode</a>
    
    
  </div>
 
    </div>
  )
}
