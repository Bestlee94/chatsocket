import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";

export interface ISearchbars01Props {
  refetch: (
    variables: any
  ) => Promise<ApolloQueryResult<Pick<any, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: any
  ) => Promise<ApolloQueryResult<Pick<any, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars01UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
