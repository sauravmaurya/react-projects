import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack } from "@mui/material"
import { Videos, SideBar } from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className='copyright' variant="body2" sx={{ color: "#fff", mt: 1.5 }}>Copyright 2023 SKM</Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
                    {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
