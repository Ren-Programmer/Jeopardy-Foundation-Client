

export interface ILabel {
  propertyName: string;
  labelName: string;
}

export default function Label({ propertyName, labelName }: ILabel) {
  return (
    <>   
        <label htmlFor={propertyName}>{labelName}</label>      
    </>
  );
}
