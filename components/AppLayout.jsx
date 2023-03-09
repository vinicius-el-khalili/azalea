import Head from 'next/head'
import styles from "@/styles/AppLayout.module.scss"
import ProfilePicture from "./ProfilePicture";
import TypedWords from "./TypedWords";

export default function AppLayout({children}){
    return(
    
    <div className={styles.layoutContainer}>

      <ProfilePicture size={150}/> 

      <div className={styles.buttonsContainer}>
        <button>Projects</button>
        <button>Info</button>
        <button>Contact</button>
      </div>

      <div className={styles.typedWords}>
          <TypedWords texts={["Projects","Info","Contact"]}/>
      </div>
      
      <main style={styles.contentContainer}>
        {children}
      </main>

      <footer className={styles.footer}>Footer</footer>
      
    </div>
    
    )
}