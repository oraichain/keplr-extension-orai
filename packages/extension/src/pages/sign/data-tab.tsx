import React, { FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import { SignDocHelper } from "@keplr/hooks";

import style from "./style.module.scss";

export const DataTab: FunctionComponent<{
  signDocHelper: SignDocHelper;
}> = observer(({ signDocHelper }) => {
  return <pre className={style.message}>{signDocHelper.signDocJson}</pre>;
});