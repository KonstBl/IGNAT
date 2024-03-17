import { useState } from "react";
import { RadioButton } from "./RadioButton";

export function ColorRadioButtons() {
    const [selectedColorOption, setSelectedColorOption] = useState(null)

    const handleColorOptionChange = (e:any)=> {
        setSelectedColorOption(e.target.id)
        console.log(selectedColorOption);
    }
    return(
        <div>
            <h4 className="choose">ОБЕРІТЬ КОЛІР</h4>
                <RadioButton 
                    className="radioButtonColorWhite"
                    id="colorOption1"
                    name="colorOptions"
                    checked={selectedColorOption === 'colorOption1'}
                    onChange={handleColorOptionChange}
                />
                <RadioButton 
                    className="radioButtonColorGrey"
                    id="colorOption2"
                    name="colorOptions"
                    checked={selectedColorOption === 'colorOption2'}
                    onChange={handleColorOptionChange}
                />
                <RadioButton 
                    className="radioButtonColorBlack"
                    id="colorOption3"
                    name="colorOptions"
                    checked={selectedColorOption === 'colorOption3'}
                    onChange={handleColorOptionChange}
                />
        </div>
    )
}