import React, { useState } from 'react'
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';
import FormBioData from './Forms/FormBioData';
import { onChange, onDropdownChange, handleSelectedDocument, checkProperties } from 'utilities';
import FormAddress from './Forms/FormAddress';
import FormQualifications from './Forms/FormQualifications';
import FormCriminalRecord from './Forms/FormCriminalRecord';
import { Button } from 'primereact/button';

export default function View({ state, handleChange, updateState, handleSubmit, handleDropdownChange, tabChange, ...props }) {


    return (
        <>
            <div className="top-nav p-mb-3">
                <TabMenu model={state.items} activeItem={state.activeItem}
                    onTabChange={tabChange}
                />
            </div>
            <div className="card">
                <div className="card-body p-px-3">
                    <div className="input-panel p-d-flex p-flex-column p-px-3 p-py-3">

                        {state.formStep == 1 && <FormBioData
                            formControl={state.formBioData}
                            onChange={handleChange}
                            formName="formBioData"
                            onSubmit={handleSubmit}
                        />
                        }
                        {state.formStep == 2 && <FormAddress
                            formControl={state.formAddress}
                            onChange={handleChange}
                            formName="formAddress"
                            handleDropdownChange={handleDropdownChange}
                            cityOptions={[
                                { name: 'Lagos', code: '1' },
                                { name: 'Abuja', code: '2' },
                                { name: 'Kano', code: '3' }
                            ]}
                            onSubmit={handleSubmit} />
                        }
                        {state.formStep == 3 && <FormQualifications
                            formControl={state.formQualification}
                            onChange={handleChange}
                            formName="formQualification"
                            onSubmit={handleSubmit} />
                        }

                        {state.formStep == 4 && <FormCriminalRecord
                            formControl={state.formCriminal}
                            onChange={handleChange}
                            handleDropdownChange={handleDropdownChange}
                            formName="formCriminal"
                            onSubmit={handleSubmit} />
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
