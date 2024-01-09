"use client";

import React, { useEffect, useState } from "react";
import { ListWithCards } from "@/types";
import ListForm from "./list-form";
import ListItem from "./list-item";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

function ListContainer({ boardId, data }: ListContainerProps) {
  const [orderData, setOrderData] = useState(data);

  useEffect(() => {
    setOrderData(data);
  }, [data]);
  return (
    <ol>
      {orderData.map((list, index) => (
        <ListItem key={list.id} index={index} data={list} />
      ))}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}

export default ListContainer;
