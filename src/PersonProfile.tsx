import * as React from "react";

export interface IPersonProfileProps {

}

export default class PersonProfile extends React.Component<IPersonProfileProps> {
  public render() {
    return (<h1>Person Name</h1>);
  }
  public subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
}
