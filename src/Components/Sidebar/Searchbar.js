import { InputBase } from "@material-ui/core";

export default function Searchbar(props) {
  const { query, setquery } = props;
  return (
    <InputBase
      value={query}
      onChange={(e) => {
        setquery(e.target.value);
      }}
      placeholder="Search Trucks"
      style={{ borderBottom: "1px solid black",padding:"5px 10px" }}
    />
  );
}
