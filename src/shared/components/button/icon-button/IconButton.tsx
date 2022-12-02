import {IconButton as CIconButton, IconButtonProps} from "@chakra-ui/react"

export interface IIconButton extends IconButtonProps{

}

export default function IconButton(props:IIconButton){
    return <>
    <CIconButton {...props}></CIconButton>
    </>
}