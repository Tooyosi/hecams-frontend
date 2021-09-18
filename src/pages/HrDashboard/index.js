import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import moment from "moment"
import { VIEW_DATE_FORMAT } from 'utilities';
import {Link} from "react-router-dom"
import { getAllApplications, getAllApplicationTypes } from 'service/jobAppliationservice';

export default function HrDashboard() {
    const [selectedCustomers1, setSelectedCustomers1] = useState(null);
    const [globalFilter1, setGlobalFilter1] = useState('');
    const [loading1, setLoading1] = useState(false);
    const [state, changeState] = useState({
        applicants:  [
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
            {name: "Test Name", role: "Test Role", status: "Test Status",email: "tuc0476@gmail.com", date: moment(Date.now()).format(VIEW_DATE_FORMAT)},
           ],
        limit: 10,
        page: 1,
        totalCount:   300,
        jobTypes: [],
        formFilter: {

        }
    })
    const fetchTypes = async ()=>{
        try {
            let {data} = await getAllApplicationTypes(state.page, state.limit)
            console.log({data})
        } catch (error) {
            
        }
    }

    const fetchApplication = async()=>{
        try {
            let {data} = await getAllApplications(state.page, state.limit)
            // console.log({data})
        } catch (error) {
            
        }
    }
    useEffect(()=>{
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
                {data[props.field]}
            </>
        );
    };

    const statusBodyTemplate = (data) => {
        return (
            <>
                <span className={`customer-badge status-${data.status}`}>{data.status}</span>
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
                onLazyLoad={(e)=>{ 
                    console.log(e)
                }}
                dataKey="id"
                rowHover
                totalRecords={state.totalCount}
                selection={selectedCustomers1}
                onSelectionChange={(e) => {
                    // console.log(e)
                    setSelectedCustomers1(e.value)
                }}
                globalFilter={globalFilter1} 
                emptyMessage="No Applicants." 
                loading={loading1} 
                onPage={(e)=>{
                    console.log(e)
                }}
                header={customer1TableHeader}>
                <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                <Column field="name" header="Applicant Name" sortable ></Column>
                <Column field="role" header="Role" sortable body={countryBodyTemplate}></Column>
                <Column field="status" header="Status" sortable body={statusBodyTemplate}></Column>
                <Column field="date" header="Date" sortable body={bodyTemplate}></Column>
                <Column field="email"  body={viewTemplate}></Column>
            </DataTable>
        </div>
    )
}
