import React from 'react'

const SkillComp = ({img,name}) => {
  return (<>
  <div className='skillComp'>
     <img className="skillImg" src={img}/>
     <h3 className='skillname'>{name}</h3>
     </div>
  </>
   
  )
}

export default SkillComp