import React from "react";
import PicSide from "./PicSide";
import { Grid, Box, Button, Link } from '@mui/material';
const Header = () => {
    return (
        <>
            <Box  my={4}  >
                <Grid container item justifyContent='start' alignItems='center' >
                    <Grid item md={6}>
                        <Grid container sx={{ fontWeight: 'bold', boxShadow: 'black' }}>
                            <Box component='span'>
                                <i className="far fa-check-circle  ms-2 mt-2"></i>
                            </Box>
                            <Box mx={2}>
                                #1 Editors Choice Appp 2021
                            </Box>
                        </Grid>
                        <Box component='h3'>
                            Best app for your modern lifestyle
                        </Box>
                        <Box component='p'>
                            Increase productivity with a simple to-do app. app for <br /> managing your personal budget
                        </Box>
                        <Grid container justifyContent='start' alignItems='center'  >
                            <Button variant='contained' >
                                Learn More
                            </Button>
                            <Box mx={3}>
                                <Link to="/" underline='none' ms={3} >Watch demo video</Link>
                            </Box>
                        </Grid>
                    </Grid>
                        <PicSide img="images/phone.png"  />
                </Grid>
            </Box>
        </>
    );
};

export default Header;
