import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"
import FormLayout from './Layout';

export const validation = Yup.object().shape({
    bathing: Yup.string().required("Required"),
    dressing: Yup.string().required("Required"),
    personalHygine: Yup.string().required("Required"),
    eating: Yup.string().required("Required"),
    mealPlanning: Yup.string().required("Required"),
    houseKeeping: Yup.string().required("Required"),
    mealPreparation: Yup.string().required("Required"),
    independentLivingSkills: Yup.string().required("Required"),
    communityIntegration: Yup.string().required("Required"),
    valuedBehaviours: Yup.string().required("Required"),
    naturalSupports: Yup.string().required("Required"),
    leisureActivities: Yup.string().required("Required"),
    skillDevelopment: Yup.string().required("Required"),
    ambAndMobility: Yup.string().required("Required"),
    medication: Yup.string().required("Required"),
    specializedTheraphies: Yup.string().required("Required"),
    transportation: Yup.string().required("Required"),
    safetyAdSecurity: Yup.string().required("Required"),
    safetyAndSecurity: Yup.string().required("Required"),
    monitoringHealth: Yup.string().required("Required"),
    additionalSkills: Yup.string().required("Required")
})

export default function Task(props) {
    let { formControl, onChange, formName, handleDropdownChange, yesOrNoOptions } = props

    return (
        <FormsWrapper values={formControl}
            handleSubmit={props.onSubmit}
            handleChange={onChange}
            validationSchema={validation}>
            {
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        handleSubmit } = props;
                    return (
                        <form onChange={onChange} onSubmit={handleSubmit} name={formName} >
                            <FormLayout>

                                <h5>Activity living *</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="bathing"
                                            name="bathing"
                                            value={values.bathing}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.bathing && touched.bathing ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Bathing"></Dropdown>



                                        {showFieldError("bathing", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="dressing"
                                            name="dressing"
                                            value={values.dressing}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.dressing && touched.dressing ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Dressing"></Dropdown>



                                        {showFieldError("dressing", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="personalHygine"
                                            name="personalHygine"
                                            value={values.personalHygine}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.personalHygine && touched.personalHygine ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Personal Hygiene"></Dropdown>



                                        {showFieldError("dressing", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="eating"
                                            name="eating"
                                            value={values.eating}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.eating && touched.eating ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Eating"></Dropdown>



                                        {showFieldError("eating", errors, touched)}
                                    </div>

                                        </div>
                                <div className="p-grid">
                                  
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="mealPlanning"
                                            name="mealPlanning"
                                            value={values.mealPlanning}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.mealPlanning && touched.mealPlanning ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Meal Planning"></Dropdown>



                                        {showFieldError("mealPlanning", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="houseKeeping"
                                            name="houseKeeping"
                                            value={values.houseKeeping}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.houseKeeping && touched.houseKeeping ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Housekeeping"></Dropdown>



                                        {showFieldError("houseKeeping", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="mealPreparation"
                                            name="mealPreparation"
                                            value={values.mealPreparation}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.mealPreparation && touched.mealPreparation ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Meal Preparation"></Dropdown>



                                        {showFieldError("mealPreparation", errors, touched)}
                                    </div>

                                </div>

                                <h5>Habitation *</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="independentLivingSkills"
                                            name="independentLivingSkills"
                                            value={values.independentLivingSkills}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.independentLivingSkills && touched.independentLivingSkills ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Improve independent living skills"></Dropdown>



                                        {showFieldError("independentLivingSkills", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="communityIntegration"
                                            name="communityIntegration"
                                            value={values.communityIntegration}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.communityIntegration && touched.communityIntegration ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Community integration"></Dropdown>



                                        {showFieldError("communityIntegration", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="valuedBehaviours"
                                            name="valuedBehaviours"
                                            value={values.valuedBehaviours}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.valuedBehaviours && touched.valuedBehaviours ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Develop socially valued Behaviours"></Dropdown>



                                        {showFieldError("valuedBehaviours", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="naturalSupports"
                                            name="naturalSupports"
                                            value={values.naturalSupports}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.naturalSupports && touched.naturalSupports ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Use of Natural Supports"></Dropdown>



                                        {showFieldError("naturalSupports", errors, touched)}
                                    </div>

                                </div>

                                <div className="p-grid">
                                   <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="leisureActivities"
                                            name="leisureActivities"
                                            value={values.leisureActivities}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.leisureActivities && touched.leisureActivities ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Meal Planning"></Dropdown>


                                        {showFieldError("leisureActivities", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="skillDevelopment"
                                            name="skillDevelopment"
                                            value={values.skillDevelopment}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.skillDevelopment && touched.skillDevelopment ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="IP Skill Development"></Dropdown>



                                        {showFieldError("skillDevelopment", errors, touched)}
                                    </div>


                                </div>

                     
                                <h5>Assisting with*</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="ambAndMobility"
                                            name="ambAndMobility"
                                            value={values.ambAndMobility}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.ambAndMobility && touched.ambAndMobility ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Ambulation and Mobility"></Dropdown>



                                        {showFieldError("ambAndMobility", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="medication"
                                            name="medication"
                                            value={values.medication}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.medication && touched.medication ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Administration of Medication"></Dropdown>



                                        {showFieldError("medication", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="specializedTheraphies"
                                            name="specializedTheraphies"
                                            value={values.specializedTheraphies}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.specializedTheraphies && touched.specializedTheraphies ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Reinforcing specialized Therapies"></Dropdown>



                                        {showFieldError("specializedTheraphies", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="transportation"
                                            name="transportation"
                                            value={values.transportation}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.transportation && touched.transportation ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Transportation"></Dropdown>



                                        {showFieldError("transportation", errors, touched)}
                                    </div>

                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="safetyAndSecurity"
                                            name="safetyAndSecurity"
                                            value={values.safetyAndSecurity}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.safetyAndSecurity && touched.safetyAndSecurity ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Supervising safety and Security"></Dropdown>


                                        {showFieldError("safetyAndSecurity", errors, touched)}
                                    </div>

                                </div>


                                <h5>Night Shift*</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="safetyAdSecurity"
                                            name="safetyAdSecurity"
                                            value={values.safetyAdSecurity}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.safetyAdSecurity && touched.safetyAdSecurity ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Supervising Safety and Security"></Dropdown>

                                        {showFieldError("safetyAdSecurity", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="monitoringHealth"
                                            name="monitoringHealth"
                                            value={values.monitoringHealth}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.monitoringHealth && touched.monitoringHealth ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Monitoring Health"></Dropdown>



                                        {showFieldError("monitoringHealth", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <Dropdown
                                            id="additionalSkills"
                                            name="additionalSkills"
                                            value={values.additionalSkills}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.additionalSkills && touched.additionalSkills ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Additional Skills"></Dropdown>



                                        {showFieldError("additionalSkills", errors, touched)}
                                    </div>

                                </div>


                            </FormLayout>
                            <div className="p-grid p-justify-end">
                                <div className="p-col-12 p-lg-6 p-md-6 p-sm-6-6">
                                    <Button label={isSubmitting ? 'Loading...please wait' : `Next`} disabled={isSubmitting} className="width-100 button-white" icon="pi pi-arrow-right" iconPos="right" ></Button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
