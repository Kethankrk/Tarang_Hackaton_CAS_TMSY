import React from 'react';
import {Box, Card, CardContent, Stack, Input, InputLabel, Select, MenuItem, Button} from '@mui/material'

const Details = () => {
    return (
        <div>
            <Box sx={{display:'flex', justifyContent:'center', paddingTop:'35vh', paddingBottom:'35vh', backgroundColor:'ButtonShadow'}}>
        <Card sx={{padding:'1vh 1vw', width:'25%', borderRadius:'10px', borderRight:'8px solid #6C63FF'}}>
            <CardContent>
                <Stack spacing='2vh'>
                    <InputLabel htmlfor='typeOfTransport' sx={{color:'black'}}>Type of Transport</InputLabel>
                    <Select id='typeOfTransport' sx={{width:'100%', height:'5vh', backgroundColor:'lightgrey'}}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'option1'}>Option 1</MenuItem>
                        <MenuItem value={'option2'}>Option 2</MenuItem>
                        <MenuItem value={'option3'}>Option 3</MenuItem>
                    </Select>
                    
                    <InputLabel htmlfor='vehicleModel' sx={{color:'black'}}>Vehicle Model</InputLabel>
                    <Select id='vehicleModel' sx={{width:'100%', height:'5vh', backgroundColor:'lightgrey'}}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'option1'}>Option 1</MenuItem>
                        <MenuItem value={'option2'}>Option 2</MenuItem>
                        <MenuItem value={'option3'}>Option 3</MenuItem>
                    </Select>

                    <InputLabel htmlfor='pickupLocation' sx={{color:'black'}}>Pickup Location</InputLabel>
                    <Select id='pickupLocation' sx={{width:'100%', height:'5vh', backgroundColor:'lightgrey'}}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'option1'}>Option 1</MenuItem>
                        <MenuItem value={'option2'}>Option 2</MenuItem>
                        <MenuItem value={'option3'}>Option 3</MenuItem>
                    </Select>

                    <InputLabel htmlfor='contactNumber' sx={{color:'black'}}>Contact Number</InputLabel>
                    <Input id='contactNumber' type='number' sx={{width:'100%', height:'5vh', backgroundColor:'lightgrey'}}/>
                    
                    <Box sx={{display:'flex', justifyContent:'right'}}>
                        <Button variant='contained' sx={{backgroundColor:'#6C63FF', color:'white', width:'30%', borderRadius:'15px'}}>Next</Button>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    </Box>
        </div>
    );
}

export default Details;
