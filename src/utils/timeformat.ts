import moment from "moment";

 export function setOriginDate(time :string){
     return moment.parseZone(time).format("YYYY-MM-DD HH:mm:ss")
 }