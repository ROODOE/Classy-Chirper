import React from 'react'

const Timeline = props => {
    return (
        <main className="col-3 d-flex-wrap">
            <form className="col rounded shadow form-group text-center mx-3">
                <h4 className="mx-3"><b>Chirp:{props.handle} </b></h4>
                <br /><p className="mb-2 rounded mx-3" type="text">{props.message}</p>
            </form>
        </main>
    )
}

export default Timeline;