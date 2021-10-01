import "./Header.css";

const Header = (props) => {
  const{title, emoji, seach, setSearch}=props;

  const handleSearch=(event)=>{
    let newResult=[];
    for(let i=0; i< emoji.length;i++){
      if(emoji[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1){
        newResult.push(emoji[i])
      }
   
    }
    return setSearch(newResult);
 
  }


  return (
    <div className="header-container">
      <h1>😎 {title} 😎</h1>
      <input
        className="input-search"
        placeholder="What emoji are you looking for?"
        onChange={handleSearch}
        value={seach}
        
      />
    </div>
  );
};

export default Header;
