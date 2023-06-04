import React, {useEffect, useState} from "react";
import ItemCard from "./ItemCard";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import * as console from "console";
import {fetchCharacterData} from "../../store/characterStore";
import MyPagination from "../MyPagination";

const Main: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const dispatch = useAppDispatch()
    const characterState = useAppSelector(state => state.characters)

    useEffect(() => {
        dispatch(fetchCharacterData(page))
    }, [page])

    const itemsList = characterState?.data?.map((el, index) => <ItemCard key={index} item={el}/>)

    return (
        <React.Fragment>
            <div className={"min-h-[400px] py-20"} style={{backgroundColor: "rgb(39, 43, 51)"}}>
                <div className={"container mx-auto"}>
                    {characterState?.loading ?
                        <div className={"min-h-[400px] py-20"}>
                            <img src={"/images/loading.svg"} alt={"loading"} className={"mx-auto"}/>
                        </div>
                        :
                        (characterState?.data?.length! > 0 ?
                            <div>
                                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 sm:px-20 lg:px-0"}>
                                    {itemsList}
                                </div>
                                <div className={"mx-auto mt-6"}>
                                    <MyPagination countItems={characterState?.pagination?.count} page={page}
                                                  handleChangePage={(newPage: number) => {
                                                      setPage(newPage)
                                                  }}/>
                                </div>
                            </div>
                            :
                            <p className={"text-white text-lg text-center mb-10"}>We don't have items now</p>)
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main