import styles from '@/styles/Home.module.scss'
import ProfilePicture from '@/components/profilePicture/ProfilePicture'


export default function Home() {
  return (
    
    <>      
      <div className={styles.mainContainer}>
        <div style={{
          border:"2px solid black",
          overflow:"hidden",
          borderRadius:"100%"
          }}>
          <ProfilePicture></ProfilePicture>
        </div>
      </div>
    </>

  )
}
