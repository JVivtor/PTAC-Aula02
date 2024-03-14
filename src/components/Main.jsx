import ( useState ) from "react";

export dafault function Main(){

    const [nome, setNome] - useState("");

    return(
        <main>
             <Input 
             type="text"
             name=""
             id=""
             onChange={(event)=> setNome(event.target.value)}
             />
        </main>
    );
}