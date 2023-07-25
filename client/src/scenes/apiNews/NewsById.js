import { Box, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Data } from "./Data";

const NewsById = () => {
    const livescoreApiKey = "cfd51b048fmsha1b30ce48a86d96p1743c6jsnde9e41f494c2"
    const navigate = useNavigate();
    const {state} = useLocation();
    const { id, data } = state;
    console.log(id);
    console.log(data);

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": livescoreApiKey,
//         "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
//       },
//     };

//     fetch(
//       `https://livescore6.p.rapidapi.com/news/v2/detail?id=${router.query.newsId}`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) =>
//         setData([
//           response.article.body,
//           response.layoutContext.meta.largeOgImage,
//         ])
//       )
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, [router.query]);

//   if (loading) {
//     return <Loader />;
//   }

const goBack = () => {
    navigate(-1);
}
  return (
    <Box sx={{ p: 2 }}>
      {/* <IconButton onClick={goBack} sx={{ m: 1 }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ maxWidth: "800px", mx: "auto", maxHeight: "500px" }}>
        <img
          src={data[1]}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      {data[0]?.map((paragraph, index) => {
          <>
              <Typography
                dangerouslySetInnerHTML={{ __html: paragraph.data.content }}
                key={index}
              ></Typography>
          </>
      })} */}
    </Box>
  );
};

export default NewsById;