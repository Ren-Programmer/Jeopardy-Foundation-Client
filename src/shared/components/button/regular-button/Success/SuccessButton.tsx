import Button, { IButton } from "../Button"
import "./SuccessButton.css"

export interface ISuccessButton extends IButton{
    
}


export default function SuccessButton({
buttonProps, info
}:ISuccessButton){
    return <>
    <div className="special-button">
        <Button buttonProps={buttonProps} info={info} />
    </div>
    </>
}