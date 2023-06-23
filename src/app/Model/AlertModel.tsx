import {AlertTypeEnum} from "../Enum/AlertEnum";

export interface Alert {
  type: AlertTypeEnum;
  message: string;
}

export class AlertModel {
  public type: AlertTypeEnum;
  public message: string;

  constructor(alert: Alert) {
    this.type = alert.type;
    this.message = alert.message;
  }
}