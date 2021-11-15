import { useState } from "react";
import { initialMoneyInfoState } from "../../reducks/store/initialState";
import {Button, Input} from "../atoms";

const EditMoneyInfo = () => {
    

    const [currentMoneyInfo, setCurrentMoneyInfo] = useState(initialMoneyInfoState);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentMoneyInfo({...currentMoneyInfo, [name]: value});
    }
    
    return (
        <form>
            <Input
                name="target_amount"
                label="Target Savings Amount"
                placeholder="¥"
                type="number"
                value={currentMoneyInfo.target_amount}
                onChange={handleInputChange}
            />
            <Input
                name="total_assets"
                label="Total Assets"
                placeholder="¥"
                type="number"
                value={currentMoneyInfo.total_assets}
                onChange={handleInputChange}
            />
            <Input
                name="deadline"
                label="Target Achievement Date"
                type="date"
                value={currentMoneyInfo.deadline}
                onChange={handleInputChange}
            />
            <Button
                color="primary"
                variant="contained"
                size="medium"
                fullWidth={true}
                onClick={() => {console.log("qwerty")}}
            >
                Update
            </Button>
        </form>
    );
}

export default EditMoneyInfo;