import { History } from "../History/History"
import { Members } from "../Members/Members"

import './Home.css'

export function Home(){
    return(
        <>
            <section className="banner">
                <section>
                    <History/>    
                    <Members/>
                </section>

                
            </section>
            
            
            
        </>
    )
}