import * as React from "react"
import { useState } from "react"

const ProfilePicture = ({size}) => {
    const [color1,setColor1]=useState("#000000")
    const [color2,setColor2]=useState("#000000")
    const [color3,setColor3]=useState("transparent")
    function randomColor(){return("#"+Math.floor(Math.random()*16777215).toString(16))}
    function randomize(){
      setColor1(randomColor())
      setColor2(randomColor())      
    }
    return(
        <div onClick={()=>{
          randomize()
        }}
        style={{
          display:"flex"
        }}
        >
          <div style={{
          overflow:"hidden",
          borderRadius:"100%",
          background: `linear-gradient(to right, ${color1}, ${color2})`,
          height:size+10,
          width:size+10,
          border:"0px solid black",
          transform:`translate(${size/2+5}px,0)`,
          }}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {size}
              height={size}
              viewBox="0 0 300 300"
              style={{
                backgroundColor:"#EFF1F3",
                opacity:1,
                borderRadius:"100%",
                border:"0px solid black",
                margin:"5px",
                transform:`translate(-${size/2+5}px,0)`
              }}
            >
              <defs>
                <linearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={color1} />
                  <stop offset="100%" stopColor={color2} />
                </linearGradient>
              </defs>
              <g
                transform="matrix(.1 0 0 -.1 0 320)"
                fill="url(#a)"
                stroke="#000"
                strokeWidth={8}
              >
                <path x="0" y="0" d="M755 2650c-44-3-78-8-75-9 3-2 117-5 254-7 136-1 250-5 253-8 11-11-20-45-47-51-16-4-30-13-30-21 0-16 16-19 25-4 4 6 11 8 16 4 6-3 2-20-11-40-23-41-25-51-7-36 7 6 26 41 43 76l29 66h105c109 0 150-6 150-21s-101-149-111-149c-5 0-23-10-40-22-23-17-32-19-38-10-6 10-14 10-36-2-16-8-33-12-38-9-12 7 33 53 53 53 9 0 28 12 42 28 20 20 25 34 21 55-7 38-26 34-47-10-10-21-36-59-58-85-31-37-46-48-69-48-39 0-36 10 11 42 21 15 46 38 54 51 21 31 32 87 17 87-6 0-11-11-11-24 0-60-114-161-181-160-28 1-39-3-42-17-3-13-18-21-46-25-24-4-40-11-38-18 7-21 44-17 92 8 49 26 95 34 95 16 0-5-8-10-18-10s-27-7-38-15c-18-14-17-15 11-9 17 4 49 14 72 24s43 16 46 14c8-9 123 27 149 46 15 11 31 20 37 20 10 0 40 34 111 125l45 58 70-7c38-3 129-13 200-21 72-8 203-20 293-26 118-9 162-16 162-25 0-7-4-16-10-19-22-14-8-26 26-23 28 2 40-2 50-18 13-18 11-25-16-66-16-24-41-50-55-56-33-15-32-28 5-35 27-6 43-27 21-27-6 0-31-43-57-95s-51-95-55-95c-13 0-59 42-59 55 0 7-17 35-39 62-21 27-41 58-45 70-4 11-15 28-26 38s-20 23-20 29c0 12-46 36-70 36-9 0-21-5-28-12-9-9-13-7-18 5-8 21-44 22-44 2 0-8-5-15-10-15-6 0-10 8-8 17 3 14-4 17-42 14-25-2-54-8-65-14-19-11-19-12 5-15 14-2 32-10 41-18 8-7 31-17 50-20 19-4 43-12 54-17 11-6 29-13 40-14 32-6 50-33 74-108 12-38 28-73 34-77 13-8 18-78 5-78-4 0-5-24-2-53l6-53-61-42c-34-24-68-57-77-74-11-22-19-81-25-207-6-97-16-218-24-268-8-51-15-112-16-135-1-127-79-182-217-154-79 17-95 31-24 22 69-9 69 9-1 52-49 30-127 45-127 25 0-5 17-23 37-41 23-21 30-31 18-27-43 14-105 18-105 6 0-6 11-11 24-11s69-13 124-30c119-35 139-36 195-11 69 32 97 80 97 169 0 24 7 86 15 136s19 171 24 268c8 135 14 183 27 203 17 27 145 118 182 129 38 13 82 56 82 82 0 14 6 27 14 30s38 53 66 111c37 75 56 103 66 99 23-9 29 23 10 55-17 29-17 29 19 76 25 33 33 52 29 67-9 31-35 57-54 54-9-2-18 0-18 5-5 24 2 28 46 25l47-3 2-160c2-131-1-179-19-265-18-90-21-141-22-355 0-137 1-317 2-400 2-82 1-175-3-205-9-70-25-453-19-459 13-13 17 23 21 161 1 84 9 205 16 268 7 65 10 174 7 250-2 74-4 252-4 395 0 214 3 274 18 340 14 59 19 130 21 267l2 186-51 5c-28 3-121 6-206 7s-158 4-163 7c-15 9-290 34-477 43-102 5-273 14-380 19-204 11-206 11-335 1zm1325-579c0-21-13-41-26-41-17 0-19 36-1 43 19 8 27 8 27-2z" />
                <path x="0" y="0" d="M667 2353c-10-564-11-496 19-1018 3-55 8-104 11-109s6-131 7-280l1-271 90-7c50-3 313-11 585-17s513-13 534-17c54-9 326 6 326 18 0 5-45 8-112 6-132-4-1218 19-1225 26-3 2 10 21 28 40 25 28 40 36 66 36 51 0 86 39 81 91-3 37-2 39 25 39 16 0 26 4 22 10-3 6-17 10-31 10s-34 5-46 11c-11 6-23 7-26 3-4-4-1-9 6-11 7-3 19-18 28-34 12-25 13-34 2-56-16-34-57-56-75-41-9 7-24-1-55-31-24-22-51-41-60-41s-20-4-23-10c-3-5-33-10-66-10h-59v120c0 66 3 120 6 120s14-10 24-22l17-22 41 43c22 23 43 49 46 57 6 14 26 20 26 7 0-5-21-30-46-58-29-31-41-51-33-54 7-2 15 1 17 7 1 5 15 24 30 40 15 17 33 37 40 46 6 8 30 20 52 26s40 15 40 20c0 6 5 10 11 10s9-9 6-20c-6-24 15-27 33-5 16 19 29 19 51-1 16-15 19-14 31 5 7 12 21 21 30 21 14 0 18-7 16-33-4-47 22-41 41 11 18 49 36 57 27 11-4-21-1-35 10-46 26-26 2-34-72-23-85 12-224 13-243 1-11-7-10-20 9-75 12-36 26-68 31-71 13-9 11 5-10 68-11 30-17 58-14 61 4 3 43 6 88 6 141 0 219-19 150-36-37-9-31-27 6-19 57 13 83 32 84 62 0 22 4 27 19 25 17-3 18 1 13 34-4 22-2 43 5 51 15 19 2 29-17 13-12-10-19-10-27-2-7 7-19 12-27 12s-25 10-38 22c-22 21-24 21-37 3-7-10-18-15-24-11-6 3-15-1-20-10-6-11-16-14-30-10-20 7-21 9-6 32 21 31 4 31-26-1-13-14-30-25-37-25-8 0-16-7-19-15-8-19-24-19-24 0 0 9-6 12-16 8-13-5-15-2-10 15 7 21 7 21-31 6-44-18-73-42-73-59 0-7-7-18-15-25-9-7-14-22-13-34 2-15-3-22-19-24-27-4-29 5-7 29 15 16 14 17-5 12-11-3-26-11-32-19-24-29-29-11-29 104 0 64-8 203-17 307-12 143-16 318-17 707-1 284-4 519-7 523-4 3-9-115-12-262zm499-1290c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zM1361 2570c-18-15-19-20-7-20 23 0 20-14-11-51-24-27-24-30-6-21 24 14 63 72 63 96 0 21-10 20-39-4z" />
                <path x="0" y="0" d="M990 2538c-154-167-172-188-157-188 8 0 50 41 93 90 43 50 89 97 101 106 13 8 23 19 23 24 0 20-22 9-60-32zM1040 2540c0-5 11-10 25-10s25 5 25 10c0 6-11 10-25 10s-25-4-25-10zM760 2330c-8-5-12-12-8-15 9-9 48 4 48 16s-21 11-40-1zM2283 2227c-28-10-45-27-28-27 18-1 56 14 66 26 14 17 6 17-38 1zM1430 2165c-7-9-11-18-8-20 3-3 11 1 18 10s11 18 8 20c-3 3-11-1-18-10zM1507 2143c-3-5-2-15 3-23s5-19 1-25c-15-19-31-104-31-165 0-46 5-66 19-81 18-19 19-19 23-1 4 13 24 24 64 35 59 17 59 17 76-5 9-13 20-20 24-16 11 11-23 56-55 73-19 9-32 26-36 45-4 17-11 28-15 25-5-3-13 9-19 27-15 51-37 107-43 113-3 4-8 2-11-2zm33-115c0-10-2-18-4-18s-11-3-20-6c-19-7-20 4-5 43 8 22 12 24 19 13 6-8 10-23 10-32zM1550 2111c0-5 5-13 10-16 6-3 10-2 10 4 0 5-4 13-10 16-5 3-10 2-10-4zM1390 2053c0-23-3-48-6-57s-2-16 4-16c13 0 22 92 10 105-4 5-8-9-8-32zM1582 2055c6-14 15-25 20-25 11 0 10 7-2 31-16 28-32 23-18-6zM1680 2061c0-5 6-14 13-20 8-6 22-29 32-51 18-39 35-53 35-27 0 19-58 107-70 107-5 0-10-4-10-9zM1392 1940c0-14 2-19 5-12 2 6 2 18 0 25-3 6-5 1-5-13zM1314 1334c-28-29-34-43-34-79 0-48 8-75 21-75 5 0 6 20 3 44-8 53 16 100 58 119 33 14 36 27 7 27-12 0-37-16-55-36zM1040 1135c-7-9-11-18-8-20 3-3 11 1 18 10s11 18 8 20c-3 3-11-1-18-10z" />
              </g>
            </svg>
        </div>
    )
}

export default ProfilePicture
