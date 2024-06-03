import React from 'react'
import { Menubar } from 'primereact/menubar';


function Navbar() {

    const items = [
        {
            label: 'Message',
            icon: 'pi pi-fw pi-envelope',
            url: "/"
        },
        // {
        //     label: 'Message',
        //     icon: 'pi pi-fw pi-envelope',
        // },
    ];


    return (

        <Menubar model={items} />
    )
}

export default Navbar