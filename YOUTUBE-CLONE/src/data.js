export const API_KEY='AIzaSyDM9AnOMyjKaEkC1GKnf9_551UIhx_DJr8';

export const value_converter =(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if (value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}