import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import moment from "moment"
import { VIEW_DATETIME_FORMAT } from 'utilities';
import { Link } from "react-router-dom"
import { getAllApplications, getAllApplicationTypes } from 'service/jobAppliationservice';

export default function HrDashboard() {
    const [selectedCustomers1, setSelectedCustomers1] = useState(null);
    const [globalFilter1, setGlobalFilter1] = useState('');
    const [loading1, setLoading1] = useState(false);
    const [state, changeState] = useState({
        loading: false,
        applicants: [],
        limit: 2,
        page: 1,
        totalCount: 0,
        jobTypes: [],
        formFilter: {

        }
    })
    const fetchTypes = async () => {
        try {
            let { data } = await getAllApplicationTypes(state.page, state.limit)

            let newData = Object.entries(data).map((a) => {
                return { name: a[0], value: a[1] }
            })

            changeState({
                ...state,
                jobTypes: newData
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchApplication = async (page = state.page, limit = state.limit) => {
        changeState({
            ...state,
            loading: true
        })
        try {
            let { data } = await getAllApplications(page, limit)

            changeState({
                ...state,
                loading: false,
                totalCount: data.jobApplicationTotalCount || 0,
                applicants: data.jobProcessedList || [],
                page: page

            })
        } catch (error) {
            changeState({
                ...state,
                loading: false,
            })

        }
    }
    useEffect(() => {
        fetchApplication()
        fetchTypes()
    }, [])

    const viewTemplate = (data, props) => {
        return (
            <>

                <Link to={`/apply/${data[props.field]}`} className="p-button p-component">View</Link>
            </>
        )
    };

    const bodyTemplate = (data, props) => {
        return (
            <>
                {/* <span className="p-column-title">{props.header}</span> */}
                {props.header == "Date"? moment(data[props.field]).format(VIEW_DATETIME_FORMAT):
                <>{data[props.field]} {props.field2 && data[props.field2]} </>
            }
            </>
        );
    };

    const statusBodyTemplate = (data) => {
        return (
            <>
                <span className={`customer-badge status-${data.processStatus}`}>{data.processStatus}</span>
            </>
        )
    };
    const countryBodyTemplate = (data) => {
        return (
            <>
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }} className="image-text">{data.role}</span>
            </>
        );
    };
    const customer1TableHeader = (
        <div className="table-header">
            Applicants
            {/* <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilter1} onChange={(e) => setGlobalFilter1(e.target.value)} placeholder="Global Search" />
            </span> */}
        </div>
    );


    return (
        <div>
            <DataTable
                value={state.applicants}
                paginator
                className="p-datatable-customers"
                // rows={state.limit}
                // rows={(state.totalCount/state.limit)}
                rows={state.limit}
                // rowsPerPageOptions={[...Array((state.totalCount/state.limit))]}
                lazy={true}
                onLazyLoad={(e) => {
                    console.log(e)
                }}
                dataKey="id"
                rowHover
                totalRecords={state.totalCount}
                selection={selectedCustomers1}
                onSelectionChange={(e) => {
                    console.log(e)
                    setSelectedCustomers1(e.value)
                }}
                globalFilter={globalFilter1}
                emptyMessage="No Applicants."
                loading={state.loading}
                onPage={(e) => {
                    console.log(e)
                    if((e.page + 1) !== state.page){
                        fetchApplication((e.page + 1), state.limit)
                    }
                }}
                header={customer1TableHeader}>
                <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                <Column field="firstName" field2="lastName" header="Applicant Name" body={bodyTemplate} sortable ></Column>
                {/* <Column field="role" header="Role" sortable body={countryBodyTemplate}></Column> */}
                <Column field="processStatus" header="Status" sortable body={statusBodyTemplate}></Column>
                <Column field="jobAppSubmittedDate" header="Date" sortable body={bodyTemplate}></Column>
                <Column field="emailAddress" body={viewTemplate}></Column>
            </DataTable>
        </div>
    )
}
