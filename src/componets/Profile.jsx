import React from 'react'

export default function Profile() {
    let name="hung";
    let career="Sinh vien";
    let address="ha noi"
  return (
    <div>
        {(name&&name!=="")?
            <ul>
            <li>Name:{name}</li>
            <li>Address:{address}</li>
            <li>Career:{career}</li>
        </ul>
        :""
        }
        
      
    </div>
  )
}
