import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {AlertTypeEnum} from "../Enum/AlertEnum";
import {useDispatch, useSelector} from "react-redux";


function Alerts() {
  const dispatch = useDispatch();

  let alert = useSelector((state: any) => state.alert);
  let alertData = {
    type: alert.type ?? AlertTypeEnum.INFO,
    message: alert.message ?? '',
  }

  return (alert ?
      <Stack sx={{width: '100%'}} spacing={2}>
        <Alert severity={alertData.type}>{alertData.message}</Alert>
      </Stack> : ""
  );
}
export default Alert;