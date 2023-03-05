import Head from 'next/head'
import styles from "@/styles/AppLayout.module.scss"

export default function AppLayout({children}){
    return(
    
    <>
    
    <Head>
      <title>Azalea</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>{children}</main>

    </>
    
    )
}