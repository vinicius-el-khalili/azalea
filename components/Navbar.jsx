import ProfilePicture from "./ProfilePicture";
import TypedWords from "./TypedWords";
import styles from "@/styles/Navbar.module.scss"

export default function Navbar(){
    return (
        <>
        
        <div className={styles.navContainer}>
            <div><ProfilePicture size={150}/></div> 
            <div className={styles.buttonsContainer}>
                <button>Projects</button>
                <button>Info</button>
                <button>Contact</button>
            </div>
        </div>
        <div className={styles.typedWords}>
            <TypedWords texts={["Projects","Info","Contact"]}/>
        </div>

        </>
    )
}