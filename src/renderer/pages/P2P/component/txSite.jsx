import React from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Button from "@mui/material/Button";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import InputNumber from './inputNumber';
import SelectOption from '../../../features/selectOption';
import Antenna from "../../../features/Antenna.jsx";
function TxSite() {
    return (
            <div className="col-6 my-2 overflow-hidden p-1 ">
               <div className="col-12 flex-wrap border rounded-2">
                   <div className="col-12 d-flex align-items-center justify-content-between bg-header p-2 border-bottom">
                       <AddLocationAltIcon />
                       Tx. Site
                       <Button variant="contained" size="small">
                           <AddTwoToneIcon />
                       </Button>
                   </div>
                   <div className="col-12 p-3 d-flex flex-wrap justify-content-center align-content-between">
                        <div className="col-12 d-flex justify-content-center my-3">
                            <InputNumber text="Latitude"/>
                        </div>
                       <div className="col-12 d-flex justify-content-center my-3">
                           <InputNumber text="Longitude"/>
                       </div>
                      <div className="col-12 d-flex justify-content-center my-3 ">
                          <Antenna />
                      </div>
                        <div className="col-12 d-flex justify-content-center my-3">
                            <InputNumber text="Latitude"/>
                        </div>
                   </div>
               </div>
            </div>
    );
}

export default TxSite;