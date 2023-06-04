import React from "react"
import {Pagination, Stack} from "@mui/material";

interface IMyPaginationProps{
    countItems: number,
    page: number,
    handleChangePage: any,
    pagination_item_size?: number,
}

const MyPagination:React.FC<IMyPaginationProps> = ({countItems, page, handleChangePage, pagination_item_size= 20}) => {
    return(
        <React.Fragment>
            {countItems > pagination_item_size ?
                <Stack spacing={2} dir={"ltr"}>
                    <Pagination
                        count={Math.ceil(countItems / pagination_item_size)}
                        page={page}
                        onChange={(e, value) => handleChangePage(value)}
                        variant="outlined"
                        color={"secondary"}
                    />
                </Stack> : null}
        </React.Fragment>
    )
}

export default MyPagination