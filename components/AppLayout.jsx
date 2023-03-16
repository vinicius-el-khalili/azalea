import Head from 'next/head'
import styles from "@/styles/AppLayout.module.scss"
import ProfilePicture from "./ProfilePicture";
import TypedWords from "./TypedWords";
import { useRef } from 'react';

export default function AppLayout({children}){

  const typedWords = useRef()
  function setTypedWord(index){
    typedWords.current.write(index)
  }

  return(    
    <div className={styles.layoutContainer}>

      <div className={styles.picture}>
        <ProfilePicture size={150}/>
      </div> 

      <div className={styles.buttonsContainer}>
        <div className={styles.button} onClick={()=>{setTypedWord(0)}} >About</div>
        <div className={styles.button} onClick={()=>{setTypedWord(1)}} >Projects</div>
        <div className={styles.button} onClick={()=>{setTypedWord(2)}} >Contact</div>
      </div>

      <div className={styles.typedWords}>
          <TypedWords
          ref={typedWords}
          texts={["Info","Projects","Contact"]}
           />
      </div>
      
      <main style={styles.contentContainer}>
        {children}
      </main>

      <footer className={styles.footer}>Footer</footer>
      
    </div>
    
    )
}