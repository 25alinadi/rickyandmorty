import React from "react";
import {Badge, Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {IDataCharacter} from "../../contract/data";
import {Status} from "../../contract/enumTypes";

interface IItemCardProps{
    item: IDataCharacter
}

const ItemCard:React.FC<IItemCardProps> = ({item}) => {
    return(
        <React.Fragment>
            <Card sx={{ display: 'flex', justifyContent: 'start', borderRadius: "0.5rem", backgroundColor: "rgb(60, 62, 68)" }} className={"flex-col md:flex-row !h-full md:!h-[220px]"}>
                <CardMedia
                    component="img"
                    sx={{flex: "2 1 0%" }}
                    image={item?.image}
                    alt={item?.name}
                    className={"!w-full !h-[300px] md:!h-full !object-cover !object-center"}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"space-between", flex:"3 1 0%" }}>
                    <CardContent className={"!py-2 px-4"}>
                        <Typography component="div" variant="h2" className={"text-gray-50 !text-2xl !font-semibold cursor-pointer hover:text-orange-400"}>{item?.name}</Typography>
                        <div className={"flex flex-row justify-start items-center"}>
                            <div className={`w-3 h-3 rounded-full mr-2 ${item?.status === Status.ALIVE ? "bg-green-400" : (item?.status === Status.DEAD ? "bg-red-400" : "bg-gray-400")}`}/>
                            <Typography variant="subtitle1" component="div" className={"text-gray-50"}>
                                {`${item?.status} - ${item?.species}`}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardContent className={"!py-2 px-4"}>
                        <Typography component="span" className={"text-gray-400"}>Last known location:</Typography>
                        <Typography component="p" className={"text-gray-50 !text-lg"}>{item?.location?.name}</Typography>
                    </CardContent>
                    <CardContent className={"!py-2 px-4"}>
                        <Typography component="span" className={"text-gray-400"}>First seen in:</Typography>
                        <div className={"flex flex-row justify-between items-end"}>
                            <Typography component="p" className={"text-gray-50 !text-lg"}>{item?.origin?.name}</Typography>
                            <div className={"mr-4"}><Badge badgeContent={item?.gender} color="primary" /></div>
                        </div>
                    </CardContent>
                </Box>

            </Card>
        </React.Fragment>
    )
}

export default ItemCard