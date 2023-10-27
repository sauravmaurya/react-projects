import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack direction="row" sx={{ overflow: "auto", height: { xs: "auto", md: "95%" }, flexDirection: { md: "column" } }}>
            {categories.map(({ name, icon }) => (
                <button className="category-btn" onClick={() => { setSelectedCategory(name) }} style={{ background: name === selectedCategory && "#FC1503", color: "white" }} key={name}>
                    <span style={{ color: name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{icon}</span>
                    <span style={{ opacite: name === selectedCategory ? "1" : "0.8" }}>{name}</span>
                </button>
            )
            )}
        </Stack>
    )
}

export default SideBar
