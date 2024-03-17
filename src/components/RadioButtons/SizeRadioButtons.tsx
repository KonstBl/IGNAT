import { useState } from "react";
import { RadioButton } from "./RadioButton";

export function SizeRadioButtons() {
    const [selectedSizeOption, setSelectedSizeOption] = useState(null)
    

    const handleSizeOptionChange = (e:any)=> {
        setSelectedSizeOption(e.target.id)
        console.log(selectedSizeOption);
    }

    return(
        <div>
            <h4 className="choose">ОБЕРІТЬ РОЗМІР</h4>
                <RadioButton
                    className="radioButtonSize" 
                    id="sizeOption1"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption1'}
                    onChange={handleSizeOptionChange}
                />
                <RadioButton
                    className="radioButtonSize"  
                    id="sizeOption2"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption2'}
                    onChange={handleSizeOptionChange}
                />
                <RadioButton
                    className="radioButtonSize" 
                    id="sizeOption3"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption3'}
                    onChange={handleSizeOptionChange}
                />
                <RadioButton 
                    className="radioButtonSize"
                    id="sizeOption4"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption4'}
                    onChange={handleSizeOptionChange}
                />
                <RadioButton 
                    className="radioButtonSize"
                    id="sizeOption5"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption5'}
                    onChange={handleSizeOptionChange}
                />
                <RadioButton
                    className="radioButtonSize" 
                    id="sizeOption6"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption6'}
                    onChange={handleSizeOptionChange}
                />
                <RadioButton
                    className="radioButtonSize"
                    id="sizeOption7"
                    name="sizeOptions"
                    checked={selectedSizeOption === 'sizeOption7'}
                    onChange={handleSizeOptionChange}
                />
        </div>
    )
}