import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import {Typography} from "@mui/material";
import styles from "./style.module.css";
const navItems = [
    {
        path : "/",
        name : "Home"
    },
    {
        path : "/about",
        name : "About"
    }
    ,{
        path : "/services",
        name : "Services"
    },
    {
        path : "/blog",
        name : "Blog"
    }
]
export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 250  }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Link href="/" passHref={false} className={styles.navText}>
                    <Typography color="common.black">Home</Typography>
                </Link>
                <Link href="/about" passHref={false} className={styles.navText}>
                    <Typography color="common.black">About</Typography>
                </Link>
                <Link href="/services" passHref={false} className={styles.navText}>
                    <Typography color="common.black">Services</Typography>
                </Link>
                <Link href="/blog" passHref={false} className={styles.navText}>
                    <Typography color="common.black">Blog</Typography>
                </Link>
            </List>
            <Divider/>
            <List>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ backgroundColor : "#f7992b" , color : "#fff" , p : 1 , borderRadius : 2}} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}