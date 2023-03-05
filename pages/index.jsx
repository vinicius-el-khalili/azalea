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
            <h1>vinicius</h1>
            <h1>el</h1>
            <h1>khalili</h1>
            <hr style={{width:"40%",margin:"20px auto 20px auto"}}/>
            <h3>creative developer</h3>
          </div>
        </div>
      </div>
    </>

  )
}
