import styles from '@/styles/Home.module.scss'
import ProfilePicture from '@/components/ProfilePicture'
import TypedWords from '@/components/TypedWords'
import { createRef } from 'react'

export default function Home() {

  const child = createRef()
  const test = (_t) => {
    child.current.write(_t)
  }
  return (
    
    <>
      <ProfilePicture size={100}></ProfilePicture>
      <div>
        <TypedWords ref={child} texts={["Projects","Info","Contact"]}/>
      </div>
      <button onClick={()=>{test(0)}}>test</button>
      <button onClick={()=>{test(2)}}>test</button>
      <button onClick={()=>{test(1)}}>test</button>
    </>

  )
}
