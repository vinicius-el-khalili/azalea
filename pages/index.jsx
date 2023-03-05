import styles from '@/styles/Home.module.scss'
import ProfilePicture from '@/components/profilePicture/ProfilePicture'


export default function Home() {
  return (
    
    <>      
      <div className={styles.mainContainer}>
        <div style={{
          display:"flex",
          flexDirection:"column",
          gap:"5vh"
        }}>
          <ProfilePicture></ProfilePicture>
          <div>
            <h1>Such</h1>
            <h1>a nice</h1>
            <h1>component</h1>
            <hr style={{width:"40%",margin:"20px auto 20px auto"}}/>
            <h3>neat</h3>
          </div>
        </div>
      </div>
    </>

  )
}
