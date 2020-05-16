import React, { forwardRef } from "react";
import { Input } from "./styled.js";

const Search = forwardRef(({ onChange }, ref) => (
  <Input placeholder="SEARCH" onChange={onChange} ref={ref} />
));

export default Search;
