import React, { useEffect, useState } from 'react'
import Header from '../Home/component.jsx/Header'
import {ChevronLeft, Info, Send } from 'lucide-react'
import { db } from '../../../utils/db';
import { Ideas } from '../../../utils/schema';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function AddnewIdea() {
    const navigation= useNavigate();
    const [idea, setIdea] = useState('');
    const [username, setUsername]=useState(''); 
    const [showAlert, setShowAlert] =useState(false);
    const [existingUser, setExistingUser]=useState(false);

    useEffect(() => {
        if(localStorage.getItem('username'))
            {
                setUsername(localStorage.getItem('username'));
                setExistingUser(true);
            }
    },[])

    const onSaveHandler = async ()=> {
        // logic to save 
        try {
            const result = await db.insert(Ideas).values({
            content:idea,
            username:username,
            createdAt:moment().format('DD MMM yyyy'),
        }).returning({id: Ideas.id});

        if(result)
        {
            localStorage.setItem('username', username);
            console.log("inderted data",);
            // setUsername('');
            setIdea('');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false)
            }, 7000);

        }
        } catch (error) {
            console.log(error);
        }
        
    };



  return (
    <div>
        <Header/>

        {showAlert &&
        <div role="alert" className="alert alert-success mt-5 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your Idea was Added successfully!</span>
        </div>
        }

        <button className="btn mt-7 border-secondary" onClick={() => navigation('/')} >
            <ChevronLeft/>
            Back
        </button>
        <h2 className=" font-medium text-center text-2xl mt-5">From Concept To Creation : Empowering the StartUp Journey</h2>
        <div className="flex flex-col mt-7 gap-7 ">
            <label>Your Idea*</label>
            <textarea 
            value={idea}
            onChange={(event)=>setIdea(event.target.value)}
            className="textarea textarea-bordered border-primary"
            placeholder="Write your idea here!">
            </textarea>
        </div>

        {! existingUser&& <div className="flex flex-col mt-7 gap-7 ">
            <label className="flex items-center justify-between">Your Username*
                <span className="flex items-center justify-center text-sm "><Info className="w-4 h-4 mr-1"/> No Account Needed</span>
            </label>
            <input
             value={username}
             onChange={(event)=>setUsername(event.target.value)}
             type="text" placeholder="username" 
            className="input input-bordered w-full border-primary " />
        </div> }
        <div className="flex flex-col mt-8 ">
            <button className="btn  btn-primary mt-7"
            disabled={!(idea&&username)}
            onClick={()=> onSaveHandler()}
              >
              Send    
              <Send className=" h-4 w-4"/>
            </button>
        </div>
    </div>
  )
}

export default AddnewIdea
