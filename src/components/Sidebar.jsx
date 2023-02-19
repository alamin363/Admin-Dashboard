import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    Icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    Icon: null,
  },
  {
    text: "Products",
    Icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customer",
    Icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    Icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    Icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    Icon: null,
  },
  {
    text: "OverView",
    Icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    Icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    Icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    Icon: <PieChartOutline />,
  },
  {
    text: "Management",
    Icon: null,
  },
  {
    text: "Admin",
    Icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    Icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const icText = Text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${icText}`);
                        setActive(icText);
                      }}
                      sx={{
                        backgroundColor:
                          active === icText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === icText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === icText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === icText && (
                        <ChevronRightOutlined
                          sx={{
                            ml: "auto",
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
