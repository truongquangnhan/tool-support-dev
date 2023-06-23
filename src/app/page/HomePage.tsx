import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, ButtonGroup, Input, TextField} from "@mui/material";
import {HomePageProps} from "../Model";

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

  return (<>

    <div className={"management-user"}>
      <Typography paragraph>
        LAYOUT HOME PAGE
      </Typography>


      <form>
        <div style={{flexDirection: 'column'}}>
          <ButtonGroup sx={buttonStyle} variant="contained" aria-label="outlined primary button group">
            <Button variant="outlined" color="warning" onClick={previousCaseFn}>←</Button>
            <TextField onChange={(e) => onChangeCaseNum(e)} type="number" variant="outlined" color="info" value={"" + caseNum}/>
            <Button variant="outlined" color="info" onClick={nextCaseFn}>→</Button>

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
