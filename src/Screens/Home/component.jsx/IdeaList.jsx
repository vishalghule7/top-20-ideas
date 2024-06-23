import React from 'react'
import IdeaItem from './IdeaItem'

function IdeaList({ideaList ,refreshData}) {
  return (
    <div>
        {ideaList.map((idea,index) => (
            <IdeaItem idea={idea} key={index}
            refreshData={refreshData}
            index={index} />
        ))}
    </div>
  )
}

export default IdeaList