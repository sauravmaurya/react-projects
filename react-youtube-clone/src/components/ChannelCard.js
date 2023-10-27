import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"

import { demoProfilePicture } from '../utils/constants'



const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box sx={{ boxShadow: "none", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: { sm: "320px", xs: "100%" }, height: "320px", margin: "auto", marginTop: marginTop }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3" }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                        {channelDetail?.statistics?.subscriberCount && (<Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscribers
                        </Typography>)
                        }
                    </Typography>


                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard
