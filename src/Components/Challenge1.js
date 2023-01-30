export default function Challenge1(){
    const d = new Date();
    const month = d.getMonth()
    const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const mont=d.toDateString();
    return(
        <div>
            
            <h1>My name is Gaurav Mandal</h1>
            <p>{monthArray[month]}</p>
            <p>{mont}</p>
            
        </div>
    )
}