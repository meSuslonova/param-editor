
import React from 'react';
import ParamEditor from './ParamEditor.tsx';

const App = () => {
    const params = [
        { id: 1, name: 'Назначение' },
        { id: 2, name: 'Длина' },
    ];

    const model = {
        paramValues: [
            { paramId: 1, value: 'повседневное' },
            { paramId: 2, value: 'макси' },
        ],
        colors: ['красный', 'синий', 'зеленый'],
    };

    function handleParamValueChangeFunction(paramId: number, value: string): void {
        throw new Error('Function not implemented.');
    }

    return <ParamEditor params={params} model={model} handleParamValueChange={handleParamValueChangeFunction} />;
};

export default App;
