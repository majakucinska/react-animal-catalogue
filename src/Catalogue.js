import React from "react";
import "./Catalogue.css";

export default function Catalogue(){
    return (
        <div className="Catalogue">
            <h1>Some ancient breed dogs</h1>
                <div className="row">
                    <div className="col-3">
                        <img src="https://www.k9ofmine.com/wp-content/uploads/2021/02/white-afghan-hound.jpg" class="img-fluid d-none d-sm-block" alt="Afghan hound" />
                    </div>
                    <div className="col-3">
                        <img src="https://www.k9ofmine.com/wp-content/uploads/2020/06/Alaskan-malamute.jpg" class="img-fluid d-none d-sm-block" alt="Alaskan malamute" />
                    </div>
                    <div className="col-3">
                        <img src="https://www.k9ofmine.com/wp-content/uploads/2020/08/chow-chow-breed.jpg" class="img-fluid d-none d-sm-block" alt="Chow-chow" />
                    </div>
                    <div className="col-3">
                        <img src="https://www.k9ofmine.com/wp-content/uploads/2018/07/samoyed.jpg" class="img-fluid d-none d-sm-block" alt="Samoyed" />
                    </div>
                </div>
        </div>
    );
}