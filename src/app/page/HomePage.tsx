import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, ButtonGroup, Input, Paper, TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {HomePageProps} from "../Model";
import SelectOtherProps from "../components/form/SelectOtherProps";
import MenuItem from "@mui/material/MenuItem";
import {styled} from "@mui/material/styles";

const inputStyle = {
  marginTop: 5, width: '80vh'

}
const buttonStyle = {
  width: '100vh'
}




export const HomePage = (props: HomePageProps) => {
  let [caseNum, setCase] = useState(props.curentCaseNum);

  const previousCaseFn = () => {
    if (caseNum > 1){
      setCase(--caseNum);
    }
  }
  const nextCaseFn = () => {
      setCase(++caseNum);
  }

  const onChangeCaseNum = (e: any) => {
  const regexNumberRange = "^(?:[1-9][0-9]{0,4}(?:\\.\\d{1,2})?|100000)$";
    const regex = new RegExp(regexNumberRange,'g');
    // eslint-disable-next-line eqeqeq
    if (e.target.value && regex.test(e.target.value)){
      setCase(e.target.value);
    } else {
      alert('Please enter a number')
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (<>

    <Grid container>
      <Grid xs={12}>
        <Typography style={{backgroundColor: '#20202020'}} paragraph>TITLE</Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid xs={12} style={{backgroundColor: '#319020'}}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
        <Grid xs={4} sm={2} md={2} > a </Grid>
          <Grid xs={4} sm={2} md={2} > b </Grid>
          <Grid xs={4} sm={2} md={2} > c </Grid>
          <Grid xs={4} sm={2} md={2} > d </Grid>
        </Grid>
        <ButtonGroup sx={buttonStyle} variant="contained" aria-label="outlined primary button group">
          <Button variant="outlined" color="inherit" onClick={previousCaseFn}>←</Button>
          <TextField label="Case" onChange={(e) => onChangeCaseNum(e)} type="number" variant="outlined" color="info" value={"" + caseNum}/>
          <TextField variant="outlined" color="info" id="select" label="Case" value="20" select >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </TextField>
          <Button variant="outlined" color="inherit" onClick={nextCaseFn}>→</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
    <Grid container>
      <Grid xs={12} sm={12} md={6}>
        <Typography style={{backgroundColor: '#306020'}} paragraph>xs=6 md=4</Typography>
      </Grid>
      <Grid xs={12} sm={12} md={6}>
        <Typography style={{backgroundColor: '#306020'}} paragraph>xs=6 md=4</Typography>
      </Grid>
    </Grid>
    <Grid container >
      <Grid xs={6} md={4}>
        <Typography style={{backgroundColor: '#754020'}} paragraph>xs=6 md=4</Typography>
      </Grid>
      <Grid xs={6} md={8}>
        <Typography style={{backgroundColor: '#576020'}} paragraph>xs=6 md=8</Typography>
      </Grid>
    </Grid>

    <div className={"management-user"}>
      <Typography paragraph>
        LAYOUT HOME PAGE
      </Typography>

      <form>
        <div style={{flexDirection: 'column'}}>
          <ButtonGroup sx={buttonStyle} variant="contained" aria-label="outlined primary button group">
            <Button variant="outlined" color="inherit" onClick={previousCaseFn}>←</Button>
            <TextField label="Case" onChange={(e) => onChangeCaseNum(e)} type="number" variant="outlined" color="info" value={"" + caseNum}/>
            <TextField variant="outlined" color="info" id="select" label="Case" value="20" select >
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            <Button variant="outlined" color="inherit" onClick={nextCaseFn}>→</Button>

          </ButtonGroup>

          <Input type="file" style={{width: "100vh", height: "300px", backgroundColor: "#d3d3d3"}}/><br/>


          <TextField sx={inputStyle} label="REQUEST" color="secondary" /><br/>
          <TextField sx={inputStyle} label="RESPONSE" color="secondary" /><br/>
          <TextField sx={inputStyle} label="LOG" color="secondary" />
        </div>
      </form>
    </div>
  </>);
}
