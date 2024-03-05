import React, { useState, useEffect } from 'react';

interface Props {
    model: Model;
    params: Param[];
    handleParamValueChange: (paramId: number, value: string) => void;
}

interface Param {
    id: number;
    name: string;
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
    colors: string[]; // Define the type of "colors" here
}

interface State {
    paramValues: ParamValue[];
    model: Model;
}

class ParamEditor extends React.Component<Props, State> {
    public getModel(): Model {
        return {
            paramValues: this.state.paramValues,
            colors: [], // Initialize "colors" as an empty array
        };
    }

    public state: State = {
        paramValues: this.props.model.paramValues,
        model: this.props.model,
    };

    private handleParamValueChange = (paramId: number, value: string) => {
        const updatedParamValues = this.state.paramValues.map((paramValue) => {
            if (paramValue.paramId === paramId) {
                return { ...paramValue, value };
            }
            return paramValue;
        });

        this.setState({ paramValues: updatedParamValues });

        this.props.handleParamValueChange(paramId, value);
    };

    public render() {
        const { handleParamValueChange } = this.props;

        return (
            <div>
                {this.props.params.map((param) => (
                    <div key={param.id}>
                        <label htmlFor={param.name}>{param.name}</label>
                        <input
                            type="text"
                            id={param.name}
                            value={
                                this.state.paramValues.find(
                                    (paramValue) => paramValue.paramId === param.id
                                )?.value || ''
                            }
                            onChange={(e) =>
                                this.handleParamValueChange(param.id, e.target.value)
                            }
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamEditor;