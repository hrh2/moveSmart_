import { useState } from "react";
import {Menu, MenuItem, Sidebar, } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {BiSolidBus} from "react-icons/bi"
import {FaArtstation} from "react-icons/fa"
 import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Logo from '../../img/logo.png'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to}>
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[200],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
      <Sidebar collapsed={isCollapsed} 
               backgroundColor={colors.primary[400]}
               className="h-screen"
      >
        <Menu iconShape="circle">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[200],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  MOVE<span className=" text-yellow-500">SMART</span>
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  width="100px"
                  height="100px"
                  className="bg-cover bg-center"
                  style={{ cursor: "pointer", borderRadius: "50%" ,backgroundImage:`url(${Logo})`}}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/station"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Stations"
              to="/station/AllStations"
              icon={<LocationOnIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Buses"
              to="/station/AllBuses"
              icon={<DirectionsBusIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Forms 
            </Typography>
            <Item
              title="Station"
              to="/station/station/add"
              icon={<FaArtstation />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bus"
              to="/station/bus/add"
              icon={<BiSolidBus/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        
      </Sidebar>
  );
};

export default SideBar;
