import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"
import FormLayout from './Layout';
import FormFooter from './FormFooter';

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
    let { formControl, onChange, formName, handleDropdownChange, yesOrNoOptions, handleGoBack } = props

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
                                        <span className="p-float-label">

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
                                            ></Dropdown>

                                            <label htmlFor="bathing">Bathing</label>
                                        </span>

                                        {showFieldError("bathing", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="dressing">Dressing</label>
                                        </span>

                                        {showFieldError("dressing", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="personalHygine">Personal Hygiene</label>
                                        </span>

                                        {showFieldError("dressing", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="eating">Eating</label>
                                        </span>


                                        {showFieldError("eating", errors, touched)}
                                    </div>

                                </div>
                                <div className="p-grid">

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="mealPlanning">Meal Planning</label>

                                        </span>
                                        {showFieldError("mealPlanning", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="houseKeeping">Housekeeping</label>
                                        </span>

                                        {showFieldError("houseKeeping", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="mealPreparation">Meal Preparation</label>
                                        </span>


                                        {showFieldError("mealPreparation", errors, touched)}
                                    </div>

                                </div>

                                <h5>Habitation *</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>

                                            <label htmlFor="independentLivingSkills">Improve independent living skills</label>
                                        </span>
                                        {showFieldError("independentLivingSkills", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                                        <span className="p-float-label">
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

                                        </span>

                                        {showFieldError("communityIntegration", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>

                                            <label htmlFor="valuedBehaviours">Develop socially valued Behaviours</label>
                                        </span>
                                        {showFieldError("valuedBehaviours", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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


                                        </span>
                                        {showFieldError("naturalSupports", errors, touched)}
                                    </div>

                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                                placeholder=""></Dropdown>

                                            <label htmlFor="leisureActivities">Participate In Leisure Activities*</label>
                                        </span>
                                        {showFieldError("leisureActivities", errors, touched)}
                                    </div>

                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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

                                        </span>

                                        {showFieldError("skillDevelopment", errors, touched)}
                                    </div>


                                </div>


                                <h5>Assisting with*</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="ambAndMobility">Ambulation and Mobility</label>

                                        </span>
                                        {showFieldError("ambAndMobility", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="medication">Administration of Medication</label>
                                        </span>

                                        {showFieldError("medication", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="specializedTheraphies">Reinforcing specialized Therapies</label>
                                        </span>

                                        {showFieldError("specializedTheraphies", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="transportation">Transportation</label>

                                        </span>

                                        {showFieldError("transportation", errors, touched)}
                                    </div>

                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                    <span className="p-float-label">

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
                                            ></Dropdown>

                                            <label htmlFor="safetyAndSecurity">Supervising safety and Security</label>
                                            </span>
                                        {showFieldError("safetyAndSecurity", errors, touched)}
                                    </div>

                                </div>


                                <h5>Night Shift*</h5>

                                <div className="p-grid">
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="safetyAdSecurity">Supervising Safety and Security</label>
                                        </span>
                                        {showFieldError("safetyAdSecurity", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>

                                            <label htmlFor="monitoringHealth">Monitoring Health</label>
                                        </span>
                                        {showFieldError("monitoringHealth", errors, touched)}
                                    </div>
                                    <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                                        <span className="p-float-label">

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
                                            ></Dropdown>
                                            <label htmlFor="additionalSkills">Additional Skills</label>


                                        </span>
                                        {showFieldError("additionalSkills", errors, touched)}
                                    </div>

                                </div>


                            </FormLayout>
                            <FormFooter    
                                backText="Back"
                                nextText="Next"
                                goBack={handleGoBack}
                                proceed={handleSubmit}
                                disabled={isSubmitting}
                            />
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
