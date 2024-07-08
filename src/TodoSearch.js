import React, {useState} from "react";
function TodoSearch({searchValue, setSearchValue}) {
    return (
        <input
            placeholder="Buscar: "
            value={searchValue}
            onChange={(event) =>{
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch }