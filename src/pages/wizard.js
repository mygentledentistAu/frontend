// pages/wizard.js

import { useEffect, useState } from 'react';
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/";

const Wizard = ({ setShowWizard }) => {
    const [slices, setSlices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const wizardPage = await client.getByUID("page", "wizard");

            if (wizardPage) {
                setSlices(wizardPage.data.slices);
                console.log('setShowWizard in Wizard:', setShowWizard);
                setShowWizard && setShowWizard(false);
            } else {
                console.error("No documents found for UID: wizard_how_to_assist_you");
            }
        };

        console.log('Before fetching data in Wizard component');
        fetchData();
        console.log('After fetching data in Wizard component');
    }, [setShowWizard]);

    return (
        <div style={{ margin: 0, padding: 0 }}>
            {/* Add your wizard content here */}
            <SliceZone slices={slices} components={components} />
        </div>
    );
};

export default Wizard;
