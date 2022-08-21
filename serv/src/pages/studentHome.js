import {auth} from '../firebase';
import "./Home.css"
import {useEffect, useState} from "react"


function SHome()
{
    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })

    const continuePost = () => {
        document.getElementsByName("school").forEach(radio=>{
            if(radio.checked)
            {
                localStorage.setItem('highschool',radio.value);
                if(localStorage.getItem('teacher'))
                {
                    window.location.href="/post"
                    return;
                }
        
                window.location.href="/results"
            }
        })

    }

    const [username,setUsername] = useState(localStorage.getItem('name'))

    return(
        <div className='centerFlexH'>
            <h1>home - student</h1>
            <h3 id="welcome">Welcome, {username}</h3>
            <h1 id="guide">Select your school to view available community service opportunities!</h1>
            <div>              
                <div id="radioCont">
                    <div class="buttonCont">
                        <img src="https://ir.4sqi.net/img/general/original/55258191_8iYBsi9vs_NlTYpSLRq7lgeegCr1osuuAk__NosBqi8.jpg"/>
                        <label>Dickinson High School</label>
                        <input type="radio" name="school" value={"dickinson"}/>
                    </div>
                    <div class="buttonCont">
                        <img src="https://hudsoncountyview.com/wp-content/uploads/2021/07/McNair-High-School-1024x576.png"/>
                        <label>McNair High School</label>
                        <input type="radio" name="school" value={"mcnair"}/>
                    </div>
                    <div class="buttonCont">
                        <img src="https://th.bing.com/th/id/R.dd9454142c2f9bdd055db829f11f1afa?rik=Ir99RInh912o2Q&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2018%2f09%2f11%2f15754204%2fRSC_8.29.18_HTH-0019.jpg&ehk=q4yr0tkADZTeySdebPyNL69IVDBHbrJBm%2fcDCv7Uxf0%3d&risl=&pid=ImgRaw&r=0"/>
                        <label>High Tech High School</label>
                        <input type="radio" name="school" value={"hths"}/>
                    </div>
                </div>
                <button type="submit" id="searchBtn" onClick={continuePost}>go</button>
            </div>

        </div>
    )
}

export default SHome;