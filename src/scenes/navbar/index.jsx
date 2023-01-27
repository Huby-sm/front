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

    return(
        <div>
            Navbar
        </div>
    )
}

export default Navbar