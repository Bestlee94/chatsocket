import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables: any
  ) => Promise<ApolloQueryResult<Pick<any, "fetchBoards">>>;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
