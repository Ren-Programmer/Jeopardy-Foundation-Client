export interface IModalHeader {
  title:string
}

export default function ModalHeader({title}: IModalHeader) {
  return <>{title}</>;
}
