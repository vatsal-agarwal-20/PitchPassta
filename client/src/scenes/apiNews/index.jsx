import React, {useState, useEffect} from 'react'
import Navbar from 'scenes/navbar';
import { Box, Typography, Link } from "@mui/material";
import './styles.css'
import { Data } from './Data';
import NewsById from './NewsById';
import { useNavigate } from 'react-router';

function APINewsPage() {

    const data = Data.data;
    const checkID = "2023053115224105228"
    let singleData;
    for(let i=0;i<data.length;i++)
    {
      if(data[i].id === checkID) singleData = data[i];
    }
    console.log(singleData);
  // const [data, setData] = useState([]);
  // const livescoreApiKey = "cfd51b048fmsha1b30ce48a86d96p1743c6jsnde9e41f494c2"

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const idOptions = {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key": livescoreApiKey,
  //           "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  //         },
  //       };

  //       const idResponse = await fetch(
  //         "https://livescore6.p.rapidapi.com/news/v2/list",
  //         idOptions
  //       );
  //       const idData = await idResponse.json();

  //       // const id = idData.categories[0].id;
  //       const id = "2021020913320920836";

  //       const options = {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key": livescoreApiKey,
  //           "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  //         },
  //       };
  //       const response = await fetch(
  //         `https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=${id}&page=1`,
  //         options
  //       );
  //       const responseData = await response.json();
  //       const data = responseData.data;
  //       console.log(data);
  //       setData(data);
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })();
  // }, []);
  const navigate = useNavigate();
  const checkClick = ({id, singleData}) => {
    navigate("news-id", { state: { id: {id}, data: {singleData} } })
  }
  return(
    <div className='api-news-page' style={{width: "100vw"}}>
      <Navbar/><br/>
      <Box sx={{ p: 2, maxWidth: "90%"}}>
      <Typography
        component="h2"
        sx={{ fontSize: 22, textAlign: "center", mb: 2 }}
      >
        Latest News
      </Typography>
      {data?.map(({ title, image, published_at, id }) => {
        return (
          // href={`news/${id}`}
          <Link key={id}>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                "&:hover": { boxShadow: "0 0 5px grey", cursor: "pointer" },
                bgcolor: "rgba(0, 51, 102, 0.1)",
              }}
            >
              <Box
                sx={{
                  width: { lg: "250px", xs: "200px" },
                  height: { lg: "150px", xs: "100px" },
                }}
              >
                <img
                  src={image.data.urls.uploaded.embed}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  lazy="true"
                />
              </Box>
              <Box sx={{ pl: 2, pr: 1 }}>
                <Typography
                  sx={{
                    color: "primary.dark",
                    mb: 1,
                    fontSize: { lg: 20 },
                    mt: 1,
                  }}
                >
                  {title}
                </Typography>
                <Typography sx={{ color: "text.disabled", fontSize: 14 }}>
                  {new Date(published_at).toString().slice(0,24)}
                </Typography>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
    </div>
  )
}

export default APINewsPage;