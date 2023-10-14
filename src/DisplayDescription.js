import react, {useState} from "react";

export default function DisplayDescription(){
    
    let [dogBreed, setDogBreed] = useState();

        function afghanHoundDescription(event){
            event.preventDefault();
            setDogBreed("Afghan");
        }

        function alaskanMalamuteDescription(event){
            event.preventDefault();
            setDogBreed("Alaskan");
        }

        function chowChowDescription(event){
            event.preventDefault();
            setDogBreed("Chow-chow");
        }

        function samoyedDescription(event){
            event.preventDefault();
            setDogBreed("Samoyed");
        }


    return(
        <div>
            <div className="row">
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2021/02/white-afghan-hound.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Afghan hound"
                    onClick={afghanHoundDescription} />
                </div>
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2020/06/Alaskan-malamute.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Alaskan malamute"
                    onClick={alaskanMalamuteDescription}  />
                </div>
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2020/08/chow-chow-breed.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Chow-chow"
                    onClick={chowChowDescription} />
                </div>
                <div className="col-3">
                    <img 
                    src="https://www.k9ofmine.com/wp-content/uploads/2018/07/samoyed.jpg" 
                    class="img-fluid d-none d-sm-block" 
                    alt="Samoyed"
                    onClick={samoyedDescription} />
                </div>
            </div>
            <div className="row"> 
                <p> {dogBreed} </p>
            </div>
        </div>
    )
}