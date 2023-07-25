import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import Navbar from 'scenes/navbar';
import './styles.css'

function NewsPage() {
  const twitterUsernames = ["FabrizioRomano", "David_Ornstein", "sistoney67", "SkySportsPL", "theMadridZone", "premierleague", "TheEuropeanLad", "ThatsFootballTV", "RobDawsonESPN"]
  return (
    <div className='news-page' style={{width: "100vw"}}>
        <Navbar/><br/>
        <div className='news-content' 
        style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>

          { twitterUsernames.map((data, item) => {
            return (<div id={item} className="news-card">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName={data}
            options={{height: 350, width: "90%"}}
          /></div>
          )
          })}

         {/* <div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="FabrizioRomano"
  options={{height: 400, width: "100%"}}
//   style={{padding: "100px"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="433"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="David_Ornstein"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="sistoney67"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="SkySportsPL"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="theMadridZone"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="premierleague"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="TheEuropeanLad"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="ThatsFootballTV"
  options={{height: 400, width: "100%"}}
/></div>
<div className="news-card"><TwitterTimelineEmbed
  sourceType="profile"
  screenName="RobDawsonESPN"
  options={{height: 400, width: "100%"}}
/></div> */}
</div>
    </div>
  )
}

export default NewsPage;