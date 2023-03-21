import React, { useState, useContext } from 'react'
import EventsContext from '../context/events';


function CreateEvent({ email }) {
    const { createEvent } = useContext(EventsContext)
    const [name, namechange] = useState("");
    const [date, datechange] = useState("");
    const [desc, descchange] = useState("");
    const [price, pricechange] = useState(0);
    const [category, categorychange] = useState("normal");
    const [tnc, tncchange] = useState(false);
    const handleCreateEvent = (e) => {
        e.preventDefault()
        namechange("")
        datechange("")
        descchange("")
        pricechange(0)
        categorychange("normal")
        tncchange(false)

        let data = {
            id: Date.now(),
            name: name,
            date: date,
            description: desc,
            price: price,
            category: category,
        }

        createEvent(data, email)
    }

    return (
        <div className='create-event container col-lg-6'>
            <form onSubmit={handleCreateEvent} className="container">
                <div className="card">
                    <div className="card-header">
                        <div style={{ fontSize: "24px", fontWeight: "500" }}>Create Event</div>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group col-lg-12">
                                    <label for="event_name" className="control-label">Name</label>
                                    <div >
                                        <input
                                            type="text"
                                            className="mt-1 form-control" id="event_name"
                                            name='name'
                                            onChange={e => namechange(e.target.value)}
                                            value={name}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 mt-2">
                                    <label for="event_date" required className=" control-label">Date</label>
                                    <div >
                                        <input
                                            type="date"
                                            className=" mt-1 form-control"
                                            id="event_date"
                                            required
                                            name='date'
                                            onChange={e => datechange(e.target.value)}
                                            value={date}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 mt-2">
                                    <label for="event_desc" required className="control-label">Description</label>
                                    <div >
                                        {/* <input type="text" className="mt-1 form-control" id="event_desc"
                                            name='desc' /> */}
                                        <textarea class="mt-1 form-control"
                                            id="event_desc"
                                            name='desc'
                                            rows="3"
                                            onChange={e => descchange(e.target.value)}
                                            value={desc}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 mt-2">
                                    <label for="event_price" className="control-label">Price</label>
                                    <div >
                                        <input
                                            type="number"
                                            className="mt-1 form-control"
                                            id="event_price"
                                            name='price'
                                            onChange={e => pricechange(e.target.value)}
                                            value={price}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 my-3">
                                    <label class="radio-inline me-2">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="inlineRadio1"
                                            value="normal"
                                            className='me-1'
                                            checked={category === 'normal'}
                                            onChange={e => categorychange(e.target.value)}
                                        />Normal
                                    </label>
                                    <label class="radio-inline me-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="inlineRadio2"
                                            value="premium"
                                            className='me-1'
                                            checked={category === 'premium'}
                                            onChange={e => categorychange(e.target.value)}
                                        /> Premium
                                    </label>
                                </div>
                                <div className="form-group mt-2">
                                    <div class="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="tnc"
                                                name="tnc"
                                                required
                                                className='me-2'
                                                checked={tnc}
                                                onChange={e => tncchange(!tnc)} />
                                            I accept, Terms and Conditions
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-4">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent
