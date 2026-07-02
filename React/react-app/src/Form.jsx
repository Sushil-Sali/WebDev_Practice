
function handleEvent(event){
 event.preventDefault() 
    console.log("Form is submited..")
     
}
export default function Form(){
    return(
        <div>
            <form onSubmit={handleEvent}>
                <button>Submit</button>
            </form>
        </div>
    )
}