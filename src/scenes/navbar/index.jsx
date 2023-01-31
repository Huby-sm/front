import { useState } from "react";
import {Box, IconButton, InputBase, Typography, Select, MenuItem,
    FormControl, useTheme, useMediaQuery,} from "@mui/material";
import {Search, Message, DarkMode, LightMode, Notifications,
    Help, Menu, Close,} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import {setMode, setLogout} from "../../state";
import {useNavigate} from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";

const Navbar = () => {
    //*ouvrir le menu mobile (activer, désactiver)
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();//-> renvoie des information au store
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    //*Material, definie si la taille de l'ecran< ou > à la largueur min
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    //CONFIGURATION DARK MODE
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;


    return(
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography
                fontWeight="bold"
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                color="primary"
                onClick={() => navigate("/home")}
                sx={{
                    "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                    },
                }}
                >
                    Huby ✈️
                </Typography>
                {isNonMobileScreens && (
                    <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem"
                                 padding="0.1rem 1.5rem">
                    <InputBase placeholder="Search..."/>
                        <IconButton>
                            <Search/>
                        </IconButton>
                    </FlexBetween>
                )}
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar