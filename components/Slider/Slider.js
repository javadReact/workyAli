import {Button, Grid, Typography} from "@mui/material";
import styles from "./Slider.module.css";
const Slider = () => {
    return (
        <Grid container alignItems="center" justifyContent="center" className={styles.sliderHomePage}>
            <Grid item xs={12} className={styles.sliderHomePageChild}>
                <Typography variant="h1" component="h1" color="common.white">
                    WE BUILD THE FUTURE
                </Typography>
                <Typography variant="h2" component="h2" color="common.white" className={styles.textSliderSecond}>
                    Best Ideas – Best Solution – Best Result
                </Typography>
                <Button variant="contained" className="BtnSite">VIEW MORE</Button>
            </Grid>
        </Grid>
    );
};

export default Slider;