import React from 'react';
import {db} from '../../../../utils/db'
import { Ideas } from '../../../../utils/schema';
import { eq } from 'drizzle-orm';
import { downvote, upvote, checkIsUpVoted,checkIsDownVoted } from '../../../service';
function IdeaItem({idea, index, refreshData}) {

  
  const upVoteHandler= async()=> {
    if (upvote(idea.id)) {
    const result= await db.update(Ideas)
    .set({
      vote:idea.vote +1
    })
    .where(eq(Ideas.id , idea.id))
    .returning({id:Ideas.id});
    if(result) {
      refreshData();
    }
  };
}

  const downVote=async () => {
    if (downvote(idea.id)) {
    const result= await db.update(Ideas)
    .set({
      vote:idea.vote -1
    })
    .where(eq(Ideas.id , idea.id))
    .returning({id:Ideas.id});
    if(result) {
      refreshData();
    }
  }
  }

  return (
    <div className="my-5 p-5 shadow-lg 
        rounded-lg gap-7">
        <div className=" flex gap-7 w-full">

            <h2 className="flex gap-2 w-full"><span>{index+1}. </span> {idea?.content}</h2>
            <div className=" flex flex-col  items-center ">
               
                <h2 className={`text-lg hover:bg-gray-200 
                 rounded-md p-1 cursor-pointer px-2
                 ${checkIsUpVoted(idea.id) && 'bg-slate-200'}`}
                 onClick={()=> upVoteHandler()}
                 >👍</h2>

                <h2 className="text-lg  
                 rounded-md p-1 font-bold">{idea.vote}</h2>

                <h2 className={`text-lg hover:bg-gray-200 
                 rounded-md p-1 cursor-pointer px-2
                 ${checkIsDownVoted(idea.id) && 'bg-slate-200'}`}
                 onClick={()=>downVote()}
                 >👎</h2>
            </div>
        </div>
        <h2 className=" mt-2 ml-4 text-sm text-gray-400"><i>By @{idea.username} on {idea.createdAt}</i></h2>
    </div>
  )
}

export default IdeaItem