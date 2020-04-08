import * as React from "react";

export interface IPersonProps {
  name: string;
  callbackMethod: (callBackString: string) => string;
  //callbackMethod is just name of method which return value
  //callBackString is an argument
}

export default class Person extends React.Component<IPersonProps> {
  render() {
    let { name, callbackMethod } = this.props;
    return (
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>
        <dt>Formated Calllback Result:</dt>
        <dd>{callbackMethod("!!!Soham")}</dd>
      </dl>
    );
  }
}
