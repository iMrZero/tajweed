import { SearchIcon } from "lucide-react";
import styles from "@/styles/main.module.css"

type InputProps = {
  value: string
  onChange: (value: string) => void
}
function Input({value , onChange}: InputProps){
  return (
  <form className={styles.searchContainer} onSubmit={(e) => e.preventDefault()}>
  <div className={styles.searchWrapper}>
    {/* svg icon */}
    <SearchIcon />
    {/* <!-- Input Box --> */}
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="search"
      id="inputSearch"
      className="searchInput"
      placeholder="ابحث عن..."
      aria-label="Search" />
    
    {/* <!-- Optional Submit Button --> */}
    <button type="submit" className="searchButton">بحث</button>
   </div>
</form>
)
};

export default Input;
