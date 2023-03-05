import styles from '@/styles/Home.module.scss'
import ProfilePicture from '@/components/profilePicture/ProfilePicture'


export default function Home() {
  return (
    
    <>      
      <div className={styles.mainContainer}>
        <div style={{border:"1px solid black"}}>
          <ProfilePicture></ProfilePicture>
        </div>
      </div>
    </>

  )
}
