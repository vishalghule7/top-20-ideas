import React, { useEffect, useState } from 'react'
import Header from './component.jsx/Header'
import Hero from './component.jsx/Hero'
import Tabs from './component.jsx/Tabs'
import { useLocation } from 'react-router-dom'
import { db } from '../../../utils/db'
import { Ideas } from '../../../utils/schema'
import { desc } from 'drizzle-orm'
import IdeaList from './component.jsx/IdeaList'

function HomeScreen() {
  const params=useLocation();
  const [ideaList, setIdeaList]=useState([]);

  useEffect(() => {
    getAllIdea()
  },[params])

  const getAllIdea= async ()=> {
    const result= await db.select().from(Ideas)
    .orderBy(desc(params.hash==='#hot' 
    || params.hash==='#top'
    ? Ideas.vote:Ideas.id))
    .limit(20);

    // console.log(result);
    setIdeaList(result);

  }

  return (
    <div>
        <div >
           <Header/>
           <Hero/>
           <Tabs/>
           <IdeaList ideaList={ideaList} refreshData={getAllIdea}/>
        </div>
    </div>
  )
}

export default HomeScreen