import './Crafts.css';

import SlideTabs from '../assets/components/SlideTabs';

function Crafts() {

    return(
        <>
            <title>Creative Projects Beyond Code</title>
            <div className="container logo-page_container">
                <div className="grid logo-page mb-8">

                    <div className="col-12-md col-4-sm mt-8">
                        <SlideTabs />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Crafts;